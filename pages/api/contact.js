import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validate input

    try {
      // Save the contact message to the database
      const contactMessage = await prisma.contactMessage.create({
        data: { name, email, message },
      });
      return res.status(200).json({
        success: true,
        message: 'Message saved successfully!',
        data: contactMessage,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to save the message.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
