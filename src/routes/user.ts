import { Router } from 'express';

import User from '../models/user';

const router = Router();

// create user
router.post('/users', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

export default router;
