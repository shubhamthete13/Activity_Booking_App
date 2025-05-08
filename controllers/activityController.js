const Activity = require('../models/Activity');
const Booking = require('../models/Booking');

exports.listActivities = async (req, res) => {
  const activities = await Activity.find();
  res.json(activities);
};
exports.createActivity = async (req, res) => {
    try {
      const { name, description, date } = req.body;
      const activity = await Activity.create({ name, description, date });
      res.status(201).json({ message: 'Activity created', activity });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create activity' });
    }
  };
  

exports.bookActivity = async (req, res) => {
  const { activityId } = req.body;
  const booking = await Booking.create({ user: req.user.id, activity: activityId });
  res.status(201).json({ message: 'Activity booked', booking });
};

exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate('activity');
  res.json(bookings);
};
