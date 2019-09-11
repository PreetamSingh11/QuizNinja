const express = require('express');
const router = express.Router();
const auth = require('../../auth/authMiddleware');

router.get('/', auth, (req, res) => {
  res.json({
    "tite": "First Post",
    "description": "This is my first Post."
  });
});

module.exports = router;
