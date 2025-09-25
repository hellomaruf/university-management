import { IAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";
const nameCodeMapper: Record<string, string> = {
  Autumn: "01",
  Summar: "02",
  Fall: "03",
};
const createAcademicSemesterIntoDB = async (payload: IAcademicSemester) => {
  // Check name with wrong code ----->
  if (nameCodeMapper[payload.name] !== payload.code) {
    throw new Error(
      `Invalid code "${payload.code}" for semester "${payload.name}". ` +
        `Valid code is "${nameCodeMapper[payload.name]}".`
    );
  }
  const result = await AcademicSemesterModel.create(payload);
  return result;
};

const getAllSemester = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
  getAllSemester,
};
