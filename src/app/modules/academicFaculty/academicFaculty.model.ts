import { Schema, model } from "mongoose";
import { IAcademicFaculty } from "./academicFaculty.interface";

const AcademicFacultySchema = new Schema<IAcademicFaculty>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicFacultyModel = model<IAcademicFaculty>(
  "AcademicFaculty",
  AcademicFacultySchema
);
