import { Schema, model, connect } from "mongoose";
import { Guardian, Student } from "./student.interface";
import bcrypt from "bcrypt";
import config from "../../config";

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
const hello = "maruf";
const StudentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
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
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

// Middlewares-------->
StudentSchema.pre("save", async function () {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.BCRYPT_SOLT_ROUND)
  );
});

StudentSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

StudentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// Virtuals------->
// StudentSchema.virtual('fullName').get(function(){
//   return
// })

export const StudentModel = model<Student>("Student", StudentSchema);
