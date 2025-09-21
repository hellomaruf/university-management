import config from "../../config";
import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (password: string, studentdata: Student) => {
  console.log(studentdata, password);

  const userData: Partial<IUser> = {};
  if (!password) {
    userData.password = config.DEFAULT_PASS as string;
  }
  userData.role = "student";
  userData.id = "1234";
  const result = await UserModel.create(userData);
  if (Object.keys(result).length) {
    studentdata.id = result.id;
    studentdata.user = result._id;
    const studentResult = await StudentModel.create(studentdata);
    return studentResult;
  }
  return result;
};

export const UserService = { createUser };
