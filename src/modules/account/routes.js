import express from "express";
import multer from "multer";

import auth from "../../shared/middlewares/auth";
// import isAdmin from "../../shared/middlewares/isAdmin";
// import listUsersValidator from "./validators/listUsersParams";
// import userIdValidator from "./validators/userId";
import fundAccountValidator from "./validators/fundAccount";
import withdrawFundValidator from "./validators/withdrawFund";
import transferFundValidator from "./validators/transferFundsValidator";
import withdrawFund from "./controllers/withdrawFund";
import transferFund from "./controllers/transferFund";
import fundAccount from "./controllers/fundAccount";

const router = express.Router();

router.post("/fund", [fundAccountValidator, auth], fundAccount);
router.post("/withdraw-fund", [withdrawFundValidator, auth], withdrawFund);
router.post("/transfer-fund", [transferFundValidator, auth], transferFund);

export default router;
