const express = require("express");
const EventRoutes = require("../modules/Events/events.routes");
const BookingsRoutes = require("../modules/Bookings/bookings.routes");

const routes = express.Router();

routes.use("/events", EventRoutes);
routes.use("/bookings", BookingsRoutes);

module.exports = routes;
