import { ObjectId } from "mongodb";
import {
  IAcademicSemester,
  IUpdateSemester,
} from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

const nameCodeMapper: Record<string, string> = {
  Autumn: "01",
  Summar: "02",
  Fall: "03",
};

// Create semester----->
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

// Get all semester------>
const getAllSemester = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

// Get Single semester ------>
const getASemester = async (id: string) => {
  const result = await AcademicSemesterModel.findOne({ _id: new ObjectId(id) });
  return result;
};

const updateASemester = async (id: string, payload: IUpdateSemester) => {
  const result = await AcademicSemesterModel.updateOne(
    { _id: new ObjectId(id) },
    { $set: payload }
  );
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
  getAllSemester,
  getASemester,
  updateASemester,
};
