import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.user.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      username: "john",
      password: "john123",
    },
  });

  await prisma.project.create({
    data: {
      name: "Example project",
      description: "Lest build something awesome",
    },
  });
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
