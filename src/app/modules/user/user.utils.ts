import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { UserModel } from "./user.model";

// find last student id----->
const findLastStudentId = async () => {
  const lastStudent = await UserModel.findOne(
    { role: "student" },
    {},
    { sort: { _id: -1 } }
  );

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

// generate uniqe student id ----->
export const generateStudentId = async (payload: IAcademicSemester) => {
  const currentId = (await findLastStudentId()) || (0).toString();
  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
  const year = new Date(payload.year).getFullYear();
  incrementId = `${year}${payload.code}${incrementId}`;
  return incrementId;
};
