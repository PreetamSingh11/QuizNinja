const Joi = require('@hapi/joi');

const registerValidate = data => {
  const schema = Joi.object({
    name: Joi.string()
      .min(2)
      .max(20)
      .required(),

    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: {
          allow: ['com', 'net']
        }
      })
      .required(),

    password: Joi.string(),

    confirm_password: Joi.ref('password'),

    categories: Joi.array().items()

  });

  const {
    error
  } = Joi.validate(data, schema);
  return error;

};

module.exports = registerValidate;
