import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in");
// });
// router.get("/checkuser/:_id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete you account");
// });
// router.get("/checkadmin/:_id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all account");
// });
router.put("/:_id", updateUser);
router.delete("/:_id", deleteUser);
router.get("/:_id", getUser);
router.get("/", getUsers);

export default router;
