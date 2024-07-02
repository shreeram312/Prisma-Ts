import { PrismaClient } from "@prisma/client";
import { userInfo } from "os";
import { emit } from "process";

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

// insertUser("magic@gmail.com", "123ddfhb", "magic", "muagic");

interface UpdateParams {
  username: string;
}

async function updateUser(id: number, { username }: UpdateParams) {
  try {
    const res = await prisma.userInfo.update({
      where: {
        id,
      },
      data: {
        email: username,
      },
    });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

const Up: UpdateParams = {
  username: "suryakarna@gmail.com",
};

// updateUser(19, Up);

async function getUser(username: string) {
  try {
    const res = await prisma.userInfo.findFirst({
      where: {
        email: username,
      },
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

//

async function DeleteUser(username: string) {
  try {
    const res = await prisma.userInfo.delete({
      where: {
        email: username,
      },
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

DeleteUser("magic@gamil.com");
