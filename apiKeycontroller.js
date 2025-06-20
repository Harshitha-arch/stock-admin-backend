const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const crypto = require('crypto');

exports.generateKey = async (req, res) => {
  const key = crypto.randomBytes(16).toString('hex');
  const apiKey = await prisma.aPIKey.create({ data: { key, permissions: 'read,write' } });
  res.json(apiKey);
};

exports.getKeys = async (req, res) => {
  const keys = await prisma.aPIKey.findMany();
  res.json(keys);
};

exports.deleteKey = async (req, res) => {
  const { id } = req.params;
  await prisma.aPIKey.delete({ where: { id: Number(id) } });
  res.json({ message: 'API Key deleted' });
};