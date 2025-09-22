import { Router } from "express";
import { StudentRouters } from "../modules/student/student.route";
import { UserRouters } from "../modules/user/user.route";

const router = Router();

router.use("/student", StudentRouters);
router.use("/user", UserRouters);

export default router;
