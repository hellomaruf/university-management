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
// Check same name and same year already exist----->
AcademicSemesterSchema.pre("save", async function (next) {
  const isExist = await AcademicSemesterModel.findOne({
    name: this.name,
    year: this.year,
  });
  if (isExist) {
    const err = new Error(
      `${this.name} semester already exists for year ${this.year}`
    );
    return next(err);
  }
  next();
});

export const AcademicSemesterModel = model<IAcademicSemester>(
  "AcademicSemester",
  AcademicSemesterSchema
);
