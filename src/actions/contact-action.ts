"use server";

import { IContact } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getContacts = async () => {
  try {
    return await prisma.contact.findMany({
      
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
export const createContactAction = async ({
  postername,
  email,
  topic,
  message,
}: {
  postername: string,
 
  email: string,
  topic: string,
  message: string,

}): Promise<void> => {
  try {
    await prisma.contact.create({
      data: {
        postername,
        email,
        topic,
        message,
      },
    });

    revalidatePath("/");
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const deleteContact = async ({
  id,
}: {
  id: string;
}): Promise<void> => {
  await prisma.contact.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
};