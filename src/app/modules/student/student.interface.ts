import { Types } from "mongoose";

export interface Guardian {
  name: string;
  relation: string;
  phone: string;
  email?: string;
  address?: string;
}

export interface Student {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  email: string;
  phone?: string;
  address?: string;
  department: string;
  semester: number;
  gpa?: number;
  enrolledCourses: string[];
  guardian: Guardian;
  createdAt: Date;
  isDeleted: false;
}
