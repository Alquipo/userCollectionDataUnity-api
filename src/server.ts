import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import reportRouter from './routes/report.routes';
import userRouter from './routes/user.routes';

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use('/api', userRouter);
app.use('/api/download', reportRouter);

app.get('/', (req, res) => {
  return res.send({ version: '2.0.0' });
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connect to mongo db atlas'))
  .catch((err) => console.log(err));

// server execute
app.listen(process.env.PORT || 3333, () => console.log('Server is running!'));
