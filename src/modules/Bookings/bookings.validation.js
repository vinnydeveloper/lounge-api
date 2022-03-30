const { validate, Joi } = require("express-validation");

module.exports = {
  create: validate({
    body: Joi.object({
      event_id: Joi.string().length(24).required(),
      owner_name: Joi.string().required(),
      owner_email: Joi.string().email().required(),
      number_tickets: Joi.number().required(),
    }),
  }),

  delete: validate({
    params: Joi.object({
      id: Joi.string().length(24).required(),
    }),
  }),
  getOne: validate({
    params: Joi.object({
      id: Joi.string().length(24).required(),
    }),
  }),
  getAllByEvent: validate({
    params: Joi.object({
      eventID: Joi.string().length(24).required(),
    }),
  }),
};
