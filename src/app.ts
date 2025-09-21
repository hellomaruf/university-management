import express, { Request, Response } from "express";
import cors from "cors";
import { StudentRouters } from "./app/modules/student/student.route";
import { UserRouters } from "./app/modules/user/user.route";
const app = express();

app.use(express.json());
app.use(cors());

//application router ----->
app.use("/api/v1/students", StudentRouters);
app.use("/api/v1/user", UserRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello developer!");
});

export default app;
