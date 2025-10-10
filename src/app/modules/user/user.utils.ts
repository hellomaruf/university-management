import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { UserModel } from "./user.model";

// find last student id for a specific semester ----->
const findLastStudentId = async (year: Date, code: string) => {
  const yearNumber = year.getUTCFullYear();

  const regexPattern = new RegExp(`^${yearNumber}${code}`);

  const lastStudent = await UserModel.findOne(
    { role: "student", id: { $regex: regexPattern } },
    {},
    { sort: { createdAt: -1 } }
  );

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

// generate unique student id ----->
export const generateStudentId = async (payload: IAcademicSemester) => {
  const yearNumber = payload.year.getUTCFullYear();

  const currentId =
    (await findLastStudentId(payload.year, payload.code)) || "0000";
  const incrementId = (Number(currentId) + 1).toString().padStart(4, "0");

  const newStudentId = `${yearNumber}${payload.code}${incrementId}`;

  return newStudentId;
};
