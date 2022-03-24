const mongoose = require("mongoose");

const EventsModel = require("../../models/events");

module.exports = {
  async create(req, res, next) {
    try {
      const newEvent = await EventsModel.create(req.body);
      return res.status(201).json(newEvent);
    } catch (error) {
      return next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const eventUpdated = await EventsModel.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      return res.json(200).json(eventUpdated);
    } catch (error) {
      return next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const newEvent = await EventsModel.deleteOne({ _id: id });

      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  },
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventsModel.findOne({ _id: id });

      return res.json(event);
    } catch (error) {
      return next(error);
    }
  },
  async getAll(req, res, next) {
    try {
      const events = await EventsModel.find();

      return res.json(events);
    } catch (error) {
      return next(error);
    }
  },
};
