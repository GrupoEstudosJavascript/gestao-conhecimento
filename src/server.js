import express, { Router } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const router = Router();

// Definindo middlewares
app.use(logger('dev'));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get('/info', (req, res) => {
  res.send({
    msg: 'Funcionando!!!',
  });
});

app.use(router);
app.listen(process.env.PORT || 5200, () => {
  console.log(`Server stated port ${process.env.PORT}`);
});
