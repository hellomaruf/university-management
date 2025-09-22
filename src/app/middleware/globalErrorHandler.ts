import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = 500;
  const message = err.message || "Something Went Wrong!";
  return res.status(status).json({
    success: false,
    errorMessage: message,
    error: err,
  });
};
