import config from "../../config";
import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { IUser } from "./user.interface";
import { UserModel } from "./user.model";
import { generateStudentId } from "./user.utils";

const createUser = async (password: string, studentdata: Student) => {
  const userData: Partial<IUser> = {};
  if (!password) {
    userData.password = config.DEFAULT_PASS as string;
  }

  // find academic semester info ------>
  const academicSemester = await AcademicSemesterModel.findById(
    studentdata.admissionSemester
  );

  userData.role = "student";
  userData.id = await generateStudentId(academicSemester);

  const result = await UserModel.create(userData);
  if (Object.keys(result).length) {
    studentdata.id = result.id;
    studentdata.user = result._id;
    const studentResult = await StudentModel.create(studentdata);
    return studentResult;
  }
  console.log(userData);
  return result;
};

export const UserService = { createUser };
