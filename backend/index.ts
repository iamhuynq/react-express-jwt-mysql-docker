import express from 'express'
import usersRouter from './api/users/user.router'
import booksRouter from './api/books/book.router'
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())
app.use(express.static('public'));
app.use('/api/users', usersRouter)
app.use('/api/books', booksRouter)

app.listen(process.env.APP_PORT, () => console.log('Server up and running on port', process.env.APP_PORT))