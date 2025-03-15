import { getHotel } from "@/lib/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { hotelId } = await req.json(); // Get hotelId from request body

    if (!hotelId) {
      return NextResponse.json({ error: "Missing hotel ID" }, { status: 400 });
    }

    const parsedHotelId = Number(hotelId); // Ensure it's a number

    if (isNaN(parsedHotelId)) {
      return NextResponse.json({ error: "Invalid hotel ID" }, { status: 400 });
    }

    const hotel = await getHotel(parsedHotelId);

    if (!hotel) {
      return NextResponse.json({ error: "Hotel not found" }, { status: 404 });
    }

    return NextResponse.json(hotel);
  } catch (error) {
    console.error("Error during API request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
