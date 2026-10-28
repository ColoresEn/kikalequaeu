import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().trim().min(1, "Cannot be empty"),
  email: z.string().email("Invalid email"),
  image: z.string().url("Invalid URL"),
  userId:z.string(),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;
