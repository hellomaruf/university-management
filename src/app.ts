import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { StudentRouters } from "./app/modules/student/student.route";
import { UserRouters } from "./app/modules/user/user.route";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import router from "./app/routes";
const app = express();

app.use(express.json());
app.use(cors());

// application router ----->
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello developer!");
});

// Global error handler middleware--->
app.use(globalErrorHandler);
app.use(notFound);

export default app;
