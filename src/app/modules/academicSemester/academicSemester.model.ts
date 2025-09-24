import { model, Schema } from "mongoose";
import { IAcademicSemester } from "./academicSemester.interface";
import { Code, Months, Name } from "./academicSemester.constant";

const AcademicSemesterSchema = new Schema<IAcademicSemester>(
  {
    name: {
      type: String,
      enum: Name,
      required: true,
    },
    code: {
      type: String,
      enum: Code,
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
    startMonth: {
      type: String,
      enum: Months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: Months,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const AcademicSemesterModel = model<IAcademicSemester>(
  "AcademicSemester",
  AcademicSemesterSchema
);
