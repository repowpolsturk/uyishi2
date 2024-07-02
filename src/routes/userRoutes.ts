import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/userController';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

export default router;
