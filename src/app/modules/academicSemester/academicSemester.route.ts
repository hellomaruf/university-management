import express from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { AcademicSemesterValidation } from "./academicSemester.validation";
const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.createAcademicSemester
);

router.get("/get-all-semester", AcademicSemesterController.getAllSemester);
router.get("/:id", AcademicSemesterController.getASemester);
router.patch("/:id", AcademicSemesterController.updateASemester);

export const AcademicSemesterRouter = router;
