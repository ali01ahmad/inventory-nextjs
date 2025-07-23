// pages/api/shipments.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const shipments = await getShipments();
      res.status(200).json(shipments);
    } catch (error) {
      console.error('Error fetching shipments:', error);
      res.status(500).json({ error: 'Failed to fetch shipments' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// Helper function to fetch shipments
async function getShipments() {
  return await prisma.shipment.findMany({
    orderBy: { createdAt: 'desc' },
    include: { items: true }, // assumes a relation exists
  });
}
