import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

const muralSchema = z.object({
  name: z.string().trim().min(1, "Add an artist or title.").max(120, "The title is too long."),
  description: z
    .string()
    .trim()
    .min(1, "Add a location or note.")
    .max(2000, "The description is too long."),
  imageSrc: z
    .string()
    .trim()
    .url("Upload a valid mural image.")
    .max(2048, "The image URL is too long.")
    .refine(
      (value) => value.startsWith("https://res.cloudinary.com/www-qepweb-es/image/upload/"),
      "Upload the image using the image uploader.",
    ),
});

export async function POST(request: Request) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return NextResponse.json({ error: "Sign in to share a mural." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "The request is invalid." }, { status: 400 });
  }

  const parsedBody = muralSchema.safeParse(body);
  if (!parsedBody.success) {
    return NextResponse.json(
      { error: parsedBody.error.issues[0]?.message ?? "The mural details are invalid." },
      { status: 400 },
    );
  }

  const mural = await db.listing.create({
    data: {
      ...parsedBody.data,
      userId,
      likedIds: [],
    },
    select: { id: true },
  });

  return NextResponse.json({ id: mural.id }, { status: 201 });
}
