import { z } from "zod";

const createAcademicFacultyZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Faculty name is required"),
  }),
});

export const FacultyValidation = {
  createAcademicFacultyZodSchema,
};
