import { NextFunction, Request, Response } from "express";
import { ZodError, ZodIssue } from "zod";

export const globalErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let status = 500;
  let message = "Something Went Wrong!";
  let errorDetails: any = null;

  if (err instanceof ZodError) {
    status = 400;
    message = "Validation Error";
    errorDetails = err.issues.map((issue: ZodIssue) => ({
      path: issue.path.join("."),
      message: issue.message,
    }));
  } else if (err instanceof Error) {
    message = err.message;
  }

  return res.status(status).json({
    success: false,
    message,
    errors: errorDetails || err,
  });
};
