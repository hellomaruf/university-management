import { Request, Response } from "express";
import { UserService } from "./user.service";
import { UserValidation } from "./user.validate";

const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const password = req.body.password;
    // const zodPerseData = UserValidation.userZodSchema.parse(data);
    const result = await UserService.createUser(password, data);
    res.status(200).json({
      success: true,
      message: "User Created Successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong!",
      error: error,
    });
  }
};

export const UserController = { createUser };
