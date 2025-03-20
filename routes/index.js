
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Message routes
router.get('/messages', messageController.getAllMessages);
router.post('/messages', messageController.createMessage);
router.get('/messages/:id', messageController.getMessageById);
router.put('/messages/:id', messageController.updateMessage);
router.delete('/messages/:id', messageController.deleteMessage);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = router;
