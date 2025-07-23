const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: async () => await prisma.user.findMany(),
    instruments: async () => await prisma.instrument.findMany({
    include: { assignments: true },
  }),
    assignments: async () => await prisma.assignment.findMany(),
    shipments: async () => await prisma.shipment.findMany(),
    items: async () => await prisma.item.findMany(),
  },
  Mutation: {
    createUser: async (_: any, args: any) =>
      await prisma.user.create({ data: args }),

    createInstrument: async (_: any, args: any) =>
      await prisma.instrument.create({ data: args }),

    addShipment: async (_: any, args: { name: string; status: string; notes?: string }) =>
      await prisma.shipment.create({ data: args }),

    createAssignment: async (_: any, args: any) =>
      await prisma.assignment.create({ data: args }),

    addItem: async (_: any, args: any) =>
      await prisma.item.create({ data: args }),
  },
};
