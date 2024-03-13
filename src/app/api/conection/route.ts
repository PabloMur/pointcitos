import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/FirebaseConn";

export function GET() {
  console.log(firestore);
  return NextResponse.json("Connected");
}
