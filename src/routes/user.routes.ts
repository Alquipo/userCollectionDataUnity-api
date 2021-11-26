import { Router } from 'express';

import UserController from '../controller/UserController';

const router = Router();

// create user
router.post('/users', UserController.createUser);

// get all users
router.get('/users', UserController.listAllUsers);

// get a user
router.get('/users/:id', UserController.listOneUser);

// update a user
router.put('/users/:id', UserController.updateUser);

// delete a user
router.delete('/users/:id', UserController.deleteOneUser);

// delete all user
router.delete('/users', UserController.deleteAllUsers);

export default router;
