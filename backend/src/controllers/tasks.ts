import { Priority } from "@prisma/client";
import express from "express";
import { z } from "zod";
import { prisma } from "../prisma";

const router = express.Router();

router.post("/", async (req, res) => {
  const data = z
    .object({
      functionalityId: z.number(),
      name: z.string(),
      description: z.string(),
      priority: z.nativeEnum(Priority),
    })
    .parse(req.body);

  const task = await prisma.task.create({
    data: {
      name: data.name,
      description: data.description,
      priority: data.priority,
      functionalityId: data.functionalityId,
      status: "TODO",
    },
  });

  res.json(task);
});

export default router;
