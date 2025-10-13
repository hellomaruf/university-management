import { z } from "zod";

export const createAcademicFacultyZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Faculty name is required"),
  }),
});
