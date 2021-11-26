import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import router from './routes/user';

dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use('/api', router);

// routes
app.get('/', (req, res) => {
  return res.json('Hello World!');
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('connect to mongo db atlas'))
  .catch((err) => console.log(err));

// server execute
app.listen(3333, () => console.log('Server is running!'));
