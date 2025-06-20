const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getBrokers = async (req, res) => {
  const brokers = await prisma.broker.findMany();
  res.json(brokers);
};

exports.addBroker = async (req, res) => {
  const { name, apiKey, secretKey } = req.body;
  const broker = await prisma.broker.create({ data: { name, apiKey, secretKey } });
  res.json(broker);
};

exports.updateBroker = async (req, res) => {
  const { id } = req.params;
  const { name, apiKey, secretKey } = req.body;
  const broker = await prisma.broker.update({ where: { id: Number(id) }, data: { name, apiKey, secretKey } });
  res.json(broker);
};

exports.deleteBroker = async (req, res) => {
  const { id } = req.params;
  await prisma.broker.delete({ where: { id: Number(id) } });
  res.json({ message: 'Broker deleted' });
};