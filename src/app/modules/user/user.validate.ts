import { z } from "zod";

const userZodSchema = z.object({
  id: z.string(),
  role: z.enum(["admin", "student", "faculty"]),
  password: z.string().min(6, "Password must be at least 6 characters"),
  needsPasswordChange: z.boolean().default(true),
  status: z.enum(["in-progress", "blocked"]).default("in-progress"),
  isDeleted: z.boolean().default(false),
});

export const UserValidation = {
  userZodSchema,
};
