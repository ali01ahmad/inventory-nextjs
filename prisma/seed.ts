const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'ADMIN',
    },
  });

  const instrument = await prisma.instrument.create({
    data: {
      name: 'Oscilloscope',
      type: 'Electronics',
      quantity: 6,
      status: 'Available',
      placements: 'Lab 1',
    },
  });

  console.log({ user, instrument });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
