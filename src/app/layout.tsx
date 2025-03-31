import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { useEffect } from "react";
export const metadata: Metadata = {
  title: "Welcome | Luxe Lagoon",
  description:
    "Luxe Lagoon is a premium website where you can effortlessly plan and book your dream vacations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const keepDatabaseAwake = async () => {
      try {
        const response = await fetch("/api/Refresh-db");
        const data = await response.json();
        console.log("Database refresh:", data);
      } catch (error) {
        console.error("Error refreshing database:", error);
      }
    };

    const intervalId = setInterval(keepDatabaseAwake, 172800000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ClerkProvider>
      <html lang="en" style={{ height: "100%", overflow: "hidden" }}>
        <body
          style={{
            backgroundImage: "url('background.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            margin: 0,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30 w-full h-full"></div>
          <div className="relative z-10">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
