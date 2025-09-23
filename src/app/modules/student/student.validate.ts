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
const CreateStudentSchema = z.object({
  body: z.object({
    password: z.string().max(20, "max 20").optional(), // ✅ optional
    name: z.string().min(1, "Name is required"),
    age: z.number().int("Age must be an integer").min(0).max(150),
    gender: z.enum(["male", "female", "other"]),
    email: z.string().email("Invalid email"),
    phone: z
      .string()
      .min(6)
      .max(20)
      .regex(/^[+\d][\d\s\-()]*$/, "Invalid phone number format")
      .optional(),
    address: z.string().optional(),
    department: z.string().min(1, "Department is required"),
    semester: z.number().int().min(1),
    gpa: z.number().min(0).max(4).optional(),
    enrolledCourses: z.array(z.string().min(1)).optional().default([]),
    guardian: GuardianSchema,

    createdAt: z.preprocess((arg) => {
      if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
      return arg ?? new Date(); // ✅ default now
    }, z.instanceof(Date)),
  }),
});

export const StudentValidations = {
  CreateStudentSchema,
};
