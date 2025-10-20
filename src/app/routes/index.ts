import { Router } from "express";
import { StudentRouters } from "../modules/student/student.route";
import { UserRouters } from "../modules/user/user.route";
import { AcademicSemesterRouter } from "../modules/academicSemester/academicSemester.route";
import { FacultyRouter } from "../modules/academicFaculty/academicFaculty.route";

const router = Router();

router.use("/student", StudentRouters);
router.use("/user", UserRouters);
router.use("/academic-semester", AcademicSemesterRouter);
router.use("/faculty", FacultyRouter);
export default router;
