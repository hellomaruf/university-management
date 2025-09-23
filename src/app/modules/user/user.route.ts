import express from "express";
import { UserController } from "./user.controller";
import { StudentValidations } from "../student/student.validate";
import { validateRequest } from "../../routes/validateRequest";
const router = express.Router();

router.post(
  "/create-user",
  validateRequest(StudentValidations.CreateStudentSchema),
  UserController.createUser
);

export const UserRouters = router;
