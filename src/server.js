import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from '~/routers';

mongoose.connect(
  'mongodb://localhost/conhecimento',
  { useNewUrlParser: true },
);

dotenv.config();
const app = express();
// Definindo middlewares
app.use(logger('dev'));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.listen(process.env.PORT || 5200, () => {
  console.log(`Server stated port ${process.env.PORT}`);
});
