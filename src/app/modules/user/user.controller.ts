import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import { UserValidation } from "./user.validate";
import catchAsync from "../../utils/catchAsync";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const password = req.body.password;
    // const zodPerseData = UserValidation.userZodSchema.parse(data);
    const result = await UserService.createUser(password, data);
    res.status(200).json({
      success: true,
      message: "User Created Successfully!",
      data: result,
    });
  }
);

export const UserController = { createUser };
