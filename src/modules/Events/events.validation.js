const { validate, Joi } = require("express-validation");

module.exports = {
  create: validate({
    body: Joi.object({
      name: Joi.string().required(),
      attractions: Joi.array().required(),
      description: Joi.string().required(),
      poster: Joi.string().required(),
      scheduled: Joi.date().iso().required(),
      number_tickets: Joi.number().required(),
    }),
  }),
  update: validate({
    params: Joi.object({
      id: Joi.string().required(),
    }),
    body: Joi.object({
      name: Joi.string(),
      attractions: Joi.array().required(),
      description: Joi.string(),
      poster: Joi.string().required(),
      scheduled: Joi.date().iso(),
      number_tickets: Joi.number(),
    }),
  }),
  delete: validate({
    params: Joi.object({
      id: Joi.string().required(),
    }),
  }),
  getOne: validate({
    params: Joi.object({
      id: Joi.string().required(),
    }),
  }),
};
