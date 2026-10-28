import { db } from "@/lib/db";

interface IParams {
  userId: string;
}

export default async function getUserById(params: IParams) {
  try {
    console.log(params);
    const { userId } = params;
    console.log(userId);
    const user = await db.user.findUniqueOrThrow({
      where: {
        id: userId as string,
      }
    });

    if (!user) {
      return null;
    }

    return {
      ...user,
      createdAt: user.createdAt.toString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
