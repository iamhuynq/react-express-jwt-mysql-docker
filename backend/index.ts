require('dotenv').config()
import express from 'express'
import usersRouter from './api/users/user.router'

const app = express();
app.use(express.json())
app.use('/api/users', usersRouter)

app.listen(3000, () => console.log('Server up and running on port 3000... '))