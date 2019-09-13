const express = require('express');
const User = require('../../models/userModel');
const registerValidation = require('../../validation/createUser');
const loginValidation = require('../../validation/loginValid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {
  // Validation
  const validationError = registerValidation(req.body);
  if (validationError) return res.status(400).send(validationError.details[0].message);

  // checking user existance
  const userExist = await User.findOne({
    email: req.body.email
  });
  if (userExist) return res.status(400).send('User already exists');

  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // creatinng new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  // Pushing subdocs
  req.body.categories.forEach(category => {
    user.categories.push(category);
  });

  // saving to database
  user.save((err, user) => {
    if (err) throw err;
    console.log(user._id + ' rigistered');
    res.status(200).json(user.name).end();
  });

});

router.post('/login', async (req, res) => {

  // Validation
  const validationError = loginValidation(req.body);
  if (validationError) return res.status(400).send(validationError.details[0].message);

  // checking user existance
  const userExist = await User.findOne({
    email: req.body.email
  });
  if (!userExist) return res.status(400).send('User doesn\'t exists');

  const validPassword = await bcrypt.compare(req.body.password, userExist.password);
  if (!validPassword) return res.status(400).send('Incorrect passwords');

  //Auth
  const token = jwt.sign({
    id: userExist._id
  }, process.env.TOKEN_SECRET);

  res.header('auth-token', token);
  res.status(200).json(token);
});

module.exports = router;
