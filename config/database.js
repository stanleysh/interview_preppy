const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/interview', { useNewUrlParser: true });

// database connection, once local has been tested out
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});