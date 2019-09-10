const Joi = require('@hapi/joi');

const loginValidate = data => {
  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: {
          allow: ['com', 'net']
        }
      })
      .required(),

    password: Joi.string().min(5),
  });

  const {
    error
  } = Joi.validate(data, schema);
  return error;

};

module.exports = loginValidate;
