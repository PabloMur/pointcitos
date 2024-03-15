import { NextRequest, NextResponse } from "next/server";

export function GET(NextRequest: NextRequest) {
  return NextResponse.json("aca va a venir la informacion de un point");
}

export function POST() {
  return NextResponse.json("aca se va a crear un point");
}

export function PATCH() {
  return NextResponse.json("aca se va a actualizar o editar un point");
}

export function DELETE() {
  return NextResponse.json("aca se va a eliminar un point");
}
