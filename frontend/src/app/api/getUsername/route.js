// app/api/getUsername/route.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request) {
  const { id } = await request.json();
  
  try {
    await connectToDatabase();
    const user = await User.findById(id).select('username');
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ username: user.username });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
