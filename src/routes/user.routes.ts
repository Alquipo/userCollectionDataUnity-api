import { Router } from 'express';

import UserController from '../controller/UserController';

const userRouter = Router();

// create user
userRouter.post('/users', UserController.createUser);

// get all users
userRouter.get('/users', UserController.listAllUsers);

// get a user
userRouter.get('/users/:id', UserController.listOneUser);

// update a user
userRouter.put('/users/:id', UserController.updateUser);

// delete a user
userRouter.delete('/users/:id', UserController.deleteOneUser);

// delete all user
userRouter.delete('/users', UserController.deleteAllUsers);

export default userRouter;
