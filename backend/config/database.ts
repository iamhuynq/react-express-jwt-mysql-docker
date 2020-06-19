import { createPool } from 'mysql'

export const pool = createPool({
    port: parseInt(<string>process.env.MYSQL_PORT, 10) | 3306,
    host: process.env.DB_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10,
})