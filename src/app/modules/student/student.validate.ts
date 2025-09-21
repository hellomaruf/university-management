import { z } from "zod";

/** Guardian schema */
export const GuardianSchema = z.object({
  name: z.string().min(1, "Guardian name is required"),
  relation: z.string().min(1, "Relation is required"),
  phone: z
    .string()
    .min(6, "Phone number seems too short")
    .max(20, "Phone number seems too long")
    .regex(/^[+\d][\d\s\-()]*$/, "Invalid phone number format"),
  email: z.string().email().optional(),
  address: z.string().optional(),
});

export type GuardianFromSchema = z.infer<typeof GuardianSchema>;

/** Student schema */
export const StudentSchema = z.object({
  id: z.string().min(1, "id is required"),
  password: z.string().max(20, "max 20"),
  name: z.string().min(1, "Name is required"),
  age: z
    .number()
    .int("Age must be an integer")
    .min(0, "Age can't be negative")
    .max(150, "Age seems unrealistic"),
  gender: z.enum(["male", "female", "other"]),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .min(6, "Phone number seems too short")
    .max(20, "Phone number seems too long")
    .regex(/^[+\d][\d\s\-()]*$/, "Invalid phone number format")
    .optional(),
  address: z.string().optional(),
  department: z.string().min(1, "Department is required"),
  semester: z
    .number()
    .int("Semester must be an integer")
    .min(1, "Semester must be at least 1"),
  gpa: z
    .number()
    .min(0, "GPA can't be negative")
    .max(4, "GPA can't be greater than 4")
    .optional(),
  enrolledCourses: z
    .array(z.string().min(1, "Course id/name can't be empty"))
    .optional()
    .default([]),
  guardian: GuardianSchema,

  createdAt: z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date)
      return new Date(arg as any);
    return arg;
  }, z.instanceof(Date)),
  isDeleted: z.boolean(),
});
