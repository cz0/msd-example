const Joi = require("@hapi/joi");

const shipSchema = Joi.object()
  .keys({
    speed: Joi.number().required(),
    name: Joi.string().required()
  })
  .required();

const shipWithIdSchema = Joi.object()
  .keys({
    id: Joi.number().required(),
    speed: Joi.number().required(),
    name: Joi.string().required()
  })
  .required();

module.exports = {
  shipSchema,
  shipWithIdSchema
};
