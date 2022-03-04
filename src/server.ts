import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';

import reportRouter from './routes/report.routes';
import userRouter from './routes/user.routes';
import swaggerDocument from './swagger.json';

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRouter);
app.use('/api/download', reportRouter);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connect to mongo db atlas'))
  .catch((err) => console.log(err));

// server execute
app.listen(process.env.PORT || 3333, () =>
  console.log('Server is running! access http://localhost:3333')
);
