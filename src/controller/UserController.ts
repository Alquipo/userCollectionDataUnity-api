import { Request, Response } from 'express';

import UserModel from '../models/user';

class UserController {
  createUser = async (req: Request, res: Response) => {
    try {
      const user = new UserModel(req.body);

      const userExist = await UserModel.findOne({
        nickname: req.body.nickname
      });

      if (userExist) {
        const { _id, nickname, scene } = await UserModel.findOne({
          nickname: req.body.nickname
        });

        return res.status(403).send({
          message: 'User already exists',
          userData: { _id, nickname, scene }
        });
      }

      await user.save();

      return res.status(201).json(user);
    } catch (err) {
      console.log('Error Post users', err);

      return res.status(500).json({ message: err });
    }
  };

  listAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await UserModel.find();

      if (!users) {
        return res.status(404).json({ message: 'No users found' });
      }

      return res.json(users);
    } catch (err) {
      console.log('Error Get users', err);
      return res.status(400).json({ message: err });
    }
  };

  listOneUser = async (req: Request, res: Response) => {
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
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { scene, q1, q2, q3, q4, q5 } = req.body;

      const user = await UserModel.findByIdAndUpdate(
        id,
        {
          scene,
          q1,
          q2,
          q3,
          q4,
          q5
        },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user found' });
      }

      return res.status(200).json(user);
    } catch (err) {
      console.log('Error updated user', err);
      return res.status(400).json({ message: err });
    }
  };

  deleteOneUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await UserModel.findByIdAndRemove(id);

      if (!user) {
        return res.status(404).json({ message: 'No user found' });
      }

      return res.json(user);
    } catch (err) {
      console.log('Error Get user', err);
      return res.status(400).json({ message: err });
    }
  };

  deleteAllUsers = async (req: Request, res: Response) => {
    try {
      const user = await UserModel.remove();

      return res.json(user);
    } catch (err) {
      console.log('Error Get user', err);
      return res.status(400).json({ message: err });
    }
  };
}

export default new UserController();
