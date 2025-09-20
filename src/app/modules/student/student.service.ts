import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudent = async (data: Student) => {
  const result = await StudentModel.create(data);
  return result;
};

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
  createStudent,
  getAllStudent,
  getAStudent,
  deleteStudent,
};
