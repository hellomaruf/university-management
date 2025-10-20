import { IAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFacultyModel } from "./academicFaculty.model";

const createFaculty = async (payload: IAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);
  return result;
};

const getAllFaculty = async () => {
  const result = await AcademicFacultyModel.find();
  return result;
};

const getAFaculty = async (id: string) => {
  const result = await AcademicFacultyModel.findOne({ _id: new Object(id) });
  return result;
};

export const AcademicFacultyService = {
  createFaculty,
  getAllFaculty,
  getAFaculty,
};
