const express = require('express');
const { createActivity, listActivities, bookActivity, getMyBookings } = require('../controllers/activityController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/activities', createActivity);
router.get('/activities', listActivities); // Public
router.post('/book', authMiddleware, bookActivity); // Auth only
router.get('/my-bookings', authMiddleware, getMyBookings); // Auth only

module.exports = router;
