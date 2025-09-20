export interface Guardian {
  name: string;
  relation: string;
  phone: string;
  email?: string;
  address?: string;
}

export interface Student {
  id: string;
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
  isActive: boolean;
  createdAt: Date;
  isDeleted: false;
}
