import { createBook, getBook, deleteBookById } from './book.controller'
import { Router } from 'express'
import { Authenticate } from '../../middleware/authentication';

const router = Router()
router.post('/', createBook)
router.get('/', Authenticate, getBook)
router.delete('/', deleteBookById)

export default router