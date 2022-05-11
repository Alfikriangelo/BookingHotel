import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.js";

const router = express.Router();

router.post("/:hotelid", createRoom);
router.put("/:_id", updateRoom);
router.delete("/:_id/:hotelid", deleteRoom);
router.get("/:_id", getRoom);
router.get("/", getRooms);

export default router;
