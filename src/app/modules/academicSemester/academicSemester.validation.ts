import { z } from "zod";

export const MonthEnum = z.enum([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum(["Autumn", "Summar", "Fall"]),
    code: z.enum(["01", "02", "03"]),
    year: z.string().regex(/^\d{4}$/, "Year must be a valid YYYY format"),
    startMonth: MonthEnum,
    endMonth: MonthEnum,
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterValidationSchema,
};
