"use server";


import { db } from "@/lib/db";
import { UpdateProfileValues, updateProfileSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";
import getSession from "@/lib/getSession";

export const updateUser = async (values: UpdateProfileValues)=> {

  const { name, email, image, userId } = updateProfileSchema.parse(values);
  try {
    await db.user.update({
      where: {
        id: userId as string,
      },
      data: {
        name,
        email,
        image,
      },
    });

    revalidatePath("/");
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export async function updateProfile(values: UpdateProfileValues) {
  const session = await getSession();

  const userId = session?.user?.id;

  if (!userId) {
    throw Error("Unauthorized");
  }

  const { name, email, image } = updateProfileSchema.parse(values);

  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
      email,
      image,
    },
  });

  revalidatePath("/");
}
export const deleteUser = async ({
  id,
}: {
  id: string;
}): Promise<void> => {
  await db.user.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
};