import { Schema, model, connect } from "mongoose";
import { Guardian, Student } from "./student.interface";

const GuardianSchema = new Schema<Guardian>(
  {
    name: { type: String, required: true },
    relation: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String },
  },
  { _id: false }
);
const StudentSchema = new Schema<Student>({
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "userID is Required"],
    unique: true,
    ref: "UserModel",
  },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
  department: { type: String, required: true },
  semester: { type: Number, required: true },
  gpa: { type: Number, min: 0, max: 4 },
  enrolledCourses: { type: [String], default: [] },
  guardian: { type: GuardianSchema, required: true },
  admissionSemester: { type: Schema.Types.ObjectId, ref: "AcademicSemester" },
  createdAt: { type: Date, default: Date.now },
});

StudentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const StudentModel = model<Student>("Student", StudentSchema);
