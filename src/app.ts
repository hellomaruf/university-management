import express, { Request, Response } from "express";
import cors from "cors";
import { StudentRouters } from "./app/modules/student/student.route";
const app = express();

app.use(express.json());
app.use(cors());

//application router ----->
app.use("/api/v1/students", StudentRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello developer!");
});

export default app;
