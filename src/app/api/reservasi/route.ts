import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({sukses: 200})
}