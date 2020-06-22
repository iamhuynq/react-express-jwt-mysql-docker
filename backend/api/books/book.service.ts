import { pool } from '../../config/database'

export const create = (data: any, callBack: Function) => {
    const { title, author } = data;
    pool.query(`INSERT INTO books(title, author)
                    values(?, ?)`,
        [title, author],
        (error, result, fields) => {
            if (error) return callBack(error)
            return callBack(null, result)
        }
    )
}

export const get = (callBack: Function) => {
    pool.query(`SELECT * FROM books`, (error, result, fields) => {
        if (error) return callBack(error)
        return callBack(null, result)
    })
}