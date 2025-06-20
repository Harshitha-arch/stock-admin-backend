const express = require('express');
const router = express.Router();
const { getBrokers, addBroker, updateBroker, deleteBroker } = require('../controllers/brokerController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.get('/', verifyToken, getBrokers);
router.post('/', verifyToken, addBroker);
router.put('/:id', verifyToken, updateBroker);
router.delete('/:id', verifyToken, deleteBroker);

module.exports = router;
