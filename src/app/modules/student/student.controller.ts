import { NextFunction, Request, Response } from "express";
import { studentService } from "./student.service";
import { StudentSchema } from "./student.validate";

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allStudents = await studentService.getAllStudent();
    res.status(200).json({
      success: true,
      message: "Student get successfully!",
      data: allStudents,
    });
  } catch (error) {
    next(error);
  }
};

const getAStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studentId = req.params.id;
    const student = await studentService.getAStudent(studentId);
    res.status(200).json({
      success: true,
      message: "Get single student successfully!",
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const studentId = req.params.id;
    console.log(studentId);

    const result = studentService.deleteStudent(studentId);
    res.status(200).json({
      success: true,
      message: "Student Delete successfully !",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentController = {
  getAllStudent,
  getAStudent,
  deleteStudent,
};
