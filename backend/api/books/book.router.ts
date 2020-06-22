import { createBook, getBook } from './book.controller'
import { Router } from 'express'

const router = Router()
router.post('/', createBook)
router.get('/', getBook)

export default router