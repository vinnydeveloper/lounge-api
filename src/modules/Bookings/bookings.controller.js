const EventsModel = require("../../models/events");
const BookingsModel = require("../../models/bookings");

module.exports = {
  async create(req, res, next) {
    try {
      const { event_id, number_tickets, owner_name, owner_email } = req.body;

      const eventSaved = await EventsModel.findById(event_id);

      if (!eventSaved) {
        return res.status(404).json({
          message: "The event_id not exists in database",
        });
      }

      if (number_tickets > eventSaved.number_tickets) {
        return res.status(400).json({
          message:
            "The numbers of ticket requested are bigger than tickets available",
        });
      }
      eventSaved.number_tickets = Math.round(
        eventSaved.number_tickets - number_tickets
      );

      const newBooking = await BookingsModel.create({
        event: event_id,
        owner_name,
        owner_email,
        number_tickets,
      });
      await eventSaved.save();

      return res.status(201).json(newBooking);
    } catch (error) {
      return next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await BookingsModel.deleteOne({ _id: id });

      return res.sendStatus(204);
    } catch (error) {
      return next(error);
    }
  },
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const booking = await BookingsModel.findOne({ _id: id }).populate(
        "events"
      );

      return res.json(booking);
    } catch (error) {
      return next(error);
    }
  },
  async getAll(req, res, next) {
    try {
      const bookings = await BookingsModel.find().populate("event");

      return res.json(bookings);
    } catch (error) {
      return next(error);
    }
  },
};
