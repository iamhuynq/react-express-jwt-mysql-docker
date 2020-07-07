import { createUser, getUsers, getUserByUserId, update, deleteUserById, login, logout, getInfo } from './user.controller'
import { Router } from 'express'
import { Authenticate } from '../../middleware/authentication';

const router = Router()
router.post('/', createUser)
router.get('/', getUsers)
router.get('/getInfo', Authenticate, getInfo)
router.get('/:id', getUserByUserId)
router.patch('/', update)
router.delete('/', deleteUserById)
router.post('/login', login)
router.post('/logout', logout)

export default router