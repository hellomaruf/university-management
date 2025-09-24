import { Router } from "express";
import { StudentRouters } from "../modules/student/student.route";
import { UserRouters } from "../modules/user/user.route";
import { AcademicSemesterRouter } from "../modules/academicSemester/academicSemester.route";

const router = Router();

router.use("/student", StudentRouters);
router.use("/user", UserRouters);
router.use("/academic-semester", AcademicSemesterRouter);

export default router;
