import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AcademicFacultyService } from "./academicFaculty.service";

const createFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await AcademicFacultyService.createFaculty(data);
    res.status(200).json({
      success: true,
      message: "Faculty create successfully!",
      data: result,
    });
  }
);

const getAllFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicFacultyService.getAllFaculty();
    res.status(200).json({
      success: true,
      message: "Get All Faculty Successfully !",
      data: result,
    });
  }
);

const getAFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    const result = await AcademicFacultyService.getAFaculty(id);
    res.status(200).json({
      success: true,
      message: "Get Single Faculty Successfully!",
      data: result,
    });
  }
);

export const AcademicFacultyController = {
  createFaculty,
  getAllFaculty,
  getAFaculty,
};
