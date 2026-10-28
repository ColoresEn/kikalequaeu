
import { db } from "@/lib/db";
import { format } from "date-fns";
export default async function getUsers() {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeUsers = users.map((user) => ({
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString("es-ES"), // formato explícito
    }));
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return safeUsers;
  } catch (error: any) {
    throw new Error(error);
  }
}
