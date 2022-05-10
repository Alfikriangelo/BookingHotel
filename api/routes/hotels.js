import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";

const router = express.Router();

router.post("/", createHotel);
router.put("/:_id", updateHotel);
router.delete("/:_id", deleteHotel);
router.get("/:_id", getHotel);
router.get("/", getHotels);

export default router;
