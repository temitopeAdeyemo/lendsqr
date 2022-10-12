import express from "express";
import authRoutes from "./modules/auth/routes";
import accountRoutes from "./modules/account/routes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/account", accountRoutes);

export default router;
