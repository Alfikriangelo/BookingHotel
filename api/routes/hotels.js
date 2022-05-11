import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";

const router = express.Router();

router.post("/", createHotel);
router.put("/:_id", updateHotel);
router.delete("/find/:_id", deleteHotel);
router.get("/:_id", getHotel);
router.get("/", getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
export default router;
