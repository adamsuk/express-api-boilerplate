const Joi = require('joi');

const post_schema = Joi.object().keys().optional();

module.exports = {
  POST: post_schema
};
