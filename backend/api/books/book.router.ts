import { createBook, getBook, deleteBookById } from './book.controller'
import { Router } from 'express'

const router = Router()
router.post('/', createBook)
router.get('/', getBook)
router.delete('/', deleteBookById)

export default router