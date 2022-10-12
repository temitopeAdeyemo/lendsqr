import express from "express";
import {
  registerUser,
  loginUser,
} from "./controllers";
import {
  emailValidator,
  loginValidator,
} from "./validators";

const router = express.Router();

router.post("/register", emailValidator, registerUser);
router.post("/login", loginValidator, loginUser);

export default router;
