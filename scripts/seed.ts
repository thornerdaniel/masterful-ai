const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Advertising" },
        { name: "Tech" },
        { name: "Finance" },
        { name: "Legal" },
        { name: "Healthcare" },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories:", error);
  } finally {
    await db.$disconnect();
  }
}

main();
// to reset database npx prisma migrate reset
// npx prisma generate
// npx prisma db push
// Call in terminal node scripts/seed.ts
