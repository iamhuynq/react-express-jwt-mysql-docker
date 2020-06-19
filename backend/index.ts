import express from 'express'
import usersRouter from './api/users/user.router'

const app = express();
app.use(express.json())
app.use('/api/users', usersRouter)

app.listen(process.env.APP_PORT, () => console.log('Server up and running on port', process.env.APP_PORT))