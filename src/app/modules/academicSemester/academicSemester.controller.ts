import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AcademicSemesterService } from "./academicSemester.service";

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const semesterData = req.body;
    const result = await AcademicSemesterService.createAcademicSemesterIntoDB(
      semesterData
    );

    res.status(200).json({
      success: true,
      message: "Semester Create Successfully !!",
      data: result,
    });
  }
);

const getAllSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.getAllSemester();

  res.status(200).json({
    success: true,
    message: "Get All Semester Successfully!!",
    data: result,
  });
});

const getASemester = catchAsync(async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const result = await AcademicSemesterService.getASemester(id);
  res.status(200).json({
    success: true,
    message: "Get Single Semester Successfully!!",
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllSemester,
  getASemester,
};
