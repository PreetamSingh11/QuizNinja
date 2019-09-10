const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv/config');
const PORT = process.env.PORT || 3000;

app.post('/register', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('connected to database!');
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to database!');
});

app.use(express.json());
app.use('/api/user', require('./routes/api/user'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
