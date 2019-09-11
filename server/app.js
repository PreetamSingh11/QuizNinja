const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

require('dotenv/config');
const PORT = process.env.PORT || 3000;

// app.post('/register', (req, res) => {
//   res.send('Hello World!');
// });

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('connected to database!');
});

app.use(cors());
app.use(express.json());
app.use('/api/user', require('./routes/api/user'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
