import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const getAllStudent = async () => {
  const result = await StudentModel.find();
  return result;
};

const getAStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

const deleteStudent = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentService = {
  getAllStudent,
  getAStudent,
  deleteStudent,
};
