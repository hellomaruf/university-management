import { z } from "zod";

const userZodSchema = z.object({
  id: z.string().min(1, "ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  needsPasswordChange: z.boolean().default(true),
  role: z.enum(["admin", "student", "faculty"]),
  status: z.enum(["in-progress", "blocked"]).default("in-progress"),
  isDeleted: z.boolean().optional().default(false),
});

export const UserValidation = {
  userZodSchema,
};
