import { Request, Response, Router } from 'express';

import UserModel from '../models/user';

const router = Router();

// create user
router.post('/users', async (req: Request, res: Response) => {
  try {
    const user = new UserModel(req.body);

    const userExist = await UserModel.findOne({ nickname: req.body.nickname });

    if (userExist) {
      const { _id, nickname, scene } = await UserModel.findOne({
        nickname: req.body.nickname
      });
      return res.status(400).send({
        message: 'User already exists',
        user: { _id, nickname, scene }
      });
    }

    await user.save();

    return res.status(201).json(user);
  } catch (err) {
    console.log('Error Post users', err);
    return res.status(500).json({ message: err });
  }
});

// get all users
router.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    console.log(users);

    if (!users) {
      return res.status(404).json({ message: 'No users found' });
    }

    return res.json(users);
  } catch (err) {
    console.log('Error Get users', err);
    return res.status(400).json({ message: err });
  }
});

// get a user
router.get('/users/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'No users found' });
    }

    return res.json(user);
  } catch (err) {
    console.log('Error Get user', err);
    return res.status(400).json({ message: err });
  }
});

// update a user
router.put('/users/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { scene, q1, q2, q3, q4, q5 } = req.body;

    const user = await UserModel.findByIdAndUpdate(id, {
      scene,
      q1,
      q2,
      q3,
      q4,
      q5
    });

    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err });
    console.log('Error Get user', err);
  }
});

// delete a user
router.delete('/users/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndRemove(id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err });
    console.log('Error Get user', err);
  }
});

// delete all user
router.delete('/users', async (req: Request, res: Response) => {
  try {
    const user = await UserModel.remove();
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err });
    console.log('Error Get user', err);
  }
});

export default router;
