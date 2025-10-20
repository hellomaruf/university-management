import express from "express";
import { AcademicFacultyController } from "./academicFaculty.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { FacultyValidation } from "./academicFaculty.validation";

const router = express.Router();

router.post(
  "/create-faculty",
  validateRequest(FacultyValidation.createAcademicFacultyZodSchema),
  AcademicFacultyController.createFaculty
);
router.get("/get-all-faculty", AcademicFacultyController.getAllFaculty);

export const FacultyRouter = router;
