import { NextRequest, NextResponse } from "next/server";

//Esta funcion lo que va a hacer es enviar el codigo de invitacion al email del invitado
export function POST() {
  return NextResponse.json("enviando el codigo de invitacion");
}
