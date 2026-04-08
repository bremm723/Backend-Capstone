import prisma from "../config/prisma.js";

export const addTracking = async (req, res) => {
  try {
    const { foodId, quantity } = req.body;
    const tracking = await prisma.tracking.create({
      data: {
        userId: req.user.id,
        foodId,
        quantity,
      },
    });
    res.json(tracking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }   
};

export const getTracking = async (req, res) => {
  try {
    const data = await prisma.tracking.findMany({
      where: { userId: req.user.id },
      include: {
        food: true,
      },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};