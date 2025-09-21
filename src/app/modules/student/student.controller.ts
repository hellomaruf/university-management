import { NextFunction, Request, Response } from "express";
import { studentService } from "./student.service";
import { StudentSchema } from "./student.validate";

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const allStudents = await studentService.getAllStudent();
    res.status(200).json({
      success: true,
      message: "Student get successfully!",
      data: allStudents,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    const student = await studentService.getAStudent(studentId);
    res.status(200).json({
      success: true,
      message: "Get single student successfully!",
      data: student,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteStudent = async (req: Request, res: Response) => {
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
    res.status(500).json({
      success: true,
      message: "Something went wrong!",
      error: error,
    });
  }
};

export const studentController = {
  getAllStudent,
  getAStudent,
  deleteStudent,
};
