const express = require('express');
const router = express.Router();
const { generateKey, getKeys, deleteKey } = require('../controllers/apiKeyController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.post('/generate', verifyToken, generateKey);
router.get('/', verifyToken, getKeys);
router.delete('/:id', verifyToken, deleteKey);

module.exports = router;
