import { createUser, getUsers } from './user.controller'
import { Router } from 'express'

const router = Router()
router.post('/', createUser)
router.get('/users', getUsers)

export default router