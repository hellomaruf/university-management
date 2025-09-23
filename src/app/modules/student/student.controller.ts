import { NextFunction, Request, Response } from "express";
import { studentService } from "./student.service";
import { StudentSchema } from "./student.validate";
import catchAsync from "../../utils/catchAsync";

const getAllStudent = catchAsync(async (req: Request, res: Response) => {
  const allStudents = await studentService.getAllStudent();
  res.status(200).json({
    success: true,
    message: "Student get successfully!",
    data: allStudents,
  });
});

const getAStudent = catchAsync(async (req: Request, res: Response) => {
  const studentId = req.params.id;
  const student = await studentService.getAStudent(studentId);
  res.status(200).json({
    success: true,
    message: "Get single student successfully!",
    data: student,
  });
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const studentId = req.params.id;
  const result = studentService.deleteStudent(studentId);
  res.status(200).json({
    success: true,
    message: "Student Delete successfully !",
    data: result,
  });
});

export const studentController = {
  getAllStudent,
  getAStudent,
  deleteStudent,
};
