import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);

router.get("", (req, res) => {
  res.send("Connect Success!");
});

export default router;
