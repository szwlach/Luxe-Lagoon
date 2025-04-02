"use client";

import { useEffect } from "react";

export default function DatabaseRefresher() {
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

  return null; // Komponent nie renderuje niczego, tylko wykonuje kod w tle
}
