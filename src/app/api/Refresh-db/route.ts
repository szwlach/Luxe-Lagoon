// app/api/refresh-db/route.ts
import { refreshDatabase } from "@/lib/actions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await refreshDatabase(); // Odśwież bazę danych
    return NextResponse.json({ message: "Database refreshed successfully" });
  } catch (error) {
    console.log("Error refreshing database:", error);
    return NextResponse.json(
      { error: "Failed to refresh database" },
      { status: 500 }
    );
  }
}
