import express from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";

const router = express.Router();

router.post("/login", (req, res) => {
  const data = z
    .object({
      username: z.string(),
      password: z.string(),
    })
    .parse(req.body);

  if (data.username !== "admin" || data.password !== "admin") {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }

  const token = jwt.sign({ username: data.username }, "secret");
  res.json({ token });
});

export default router;
