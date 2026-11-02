import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";

export async function POST(
  request: Request, 
) {
  const body = await request.json();
  const { 
    email,
    name,
    password, 
    image,
    
   } = body;

   const hashedPassword = await bcrypt.hash(password, 12);

   const user = await db.user.create({
    data: {
      email,
      name,
      image,
      hashedPassword,
    }
  });
console.log('user', user)
  return NextResponse.json(user);
}