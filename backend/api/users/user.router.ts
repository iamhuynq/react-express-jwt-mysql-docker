import { createUser, getUsers, getUserByUserId, update, deleteUserById, login } from './user.controller'
import { Router } from 'express'

const router = Router()
router.post('/', createUser)
router.get('/', getUsers)
router.get('/:id', getUserByUserId)
router.patch('/', update)
router.delete('/', deleteUserById)
router.post('/login', login)

export default router