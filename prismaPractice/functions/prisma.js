const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const addData = async () => {
  await prisma.users.create({
    data: {
      id: 2,
      name: "gokul",
      product: {
        create: {
          productid: 2,
          productname: "ball",
        },
      },
    },
  });
};

const updateUser=async()=>{
    let updatedUser = await prisma.users.updateMany({
      where: {
        name: {
          equals: "shyam",
        },
      },
      data: {
        name: "demo",
      },
    });
    return updatedUser;
}

const findUser = async () => {
  let userData = await prisma.users.findMany({
    select: {
      name: true,
      product:true
    },
    where: {
      AND: [
        {
          id: { gt: 0},
        },
        {
          name: {
            equals: "vigneshwaran",
          },
        },
      ],
    }
  });
  if (userData) {
    console.log(userData);
  }
  return userData;
};

module.exports = { addData, findUser,updateUser};
