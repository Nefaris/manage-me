import { Priority } from "@prisma/client";
import express from "express";
import { z } from "zod";
import { prisma } from "../prisma";

const router = express.Router();

router.get("/", async (req, res) => {
  const functionalities = await prisma.functionality.findMany();
  res.json(functionalities);
});

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const functionality = await prisma.functionality.findFirst({
    where: { id },
    include: { tasks: true },
  });

  res.json(functionality);
});

router.post("/", async (req, res) => {
  const data = z
    .object({
      name: z.string(),
      description: z.string(),
      priority: z.nativeEnum(Priority),
    })
    .parse(req.body);

  const functionality = await prisma.functionality.create({
    data: {
      name: data.name,
      description: data.description,
      priority: data.priority,
      status: "TODO",
    },
  });

  res.json(functionality);
});

router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const functionality = await prisma.functionality.delete({
    where: { id },
  });

  res.json(functionality);
});

export default router;
