import { Router } from 'express';
import User from '~/models/userModel';

const router = Router();

router.get('/info', (req, res) => {
  res.send({
    msg: 'Servidor on',
    process: process.env,
  });
});

// -=-=-=-=-= ROTAS DE USUARIOS -=-=-=-=
router.get('/user', async (req, res) => {
  await User.find({}, (err, users) => {
    res.json(users);
  });
});

export default router;
