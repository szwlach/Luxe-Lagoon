import { UpdateHotel } from "@/lib/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const textBody = await req.text();
    console.log("Raw request body:", textBody); // Debugowanie

    let hotelId;

    // Jeśli request zawiera liczbę zamiast JSON-a, parsujemy ręcznie
    if (!isNaN(Number(textBody))) {
      hotelId = Number(textBody);
    } else {
      try {
        const body = JSON.parse(textBody);
        hotelId = body.hotelId;
      } catch (err) {
        console.error("Invalid JSON:", err);
        return NextResponse.json(
          { error: "Invalid JSON format" },
          { status: 400 }
        );
      }
    }

    console.log("Parsed hotelId:", hotelId);

    if (!hotelId) {
      return NextResponse.json({ error: "Missing hotelId" }, { status: 400 });
    }

    await UpdateHotel(hotelId);
    return NextResponse.json(
      { message: "Hotel updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating hotel:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
