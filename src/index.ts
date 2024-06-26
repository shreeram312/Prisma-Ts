import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  try {
    const res = await prisma.userInfo.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
      where: {
        lastName: lastName,
      },
    });

    console.log("User got from db:", res);
  } catch (e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
}

insertUser("goodboy@gmail.com", "123ddhb", "good", "mutukundu");
