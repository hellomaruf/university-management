import express from "express";
import { studentController } from "./student.controller";

const router = express.Router();

router.post("/create-student", studentController.createStudent);

router.get("/", studentController.getAllStudent);

router.get("/:id", studentController.getAStudent);

router.delete("/:id", studentController.deleteStudent);

export const StudentRouters = router;
