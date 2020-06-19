import { pool } from '../../config/database'

export const create = (data: any, callBack: Function) => {
    const { first_name, last_name, gender, email, password, number } = data;
    pool.query(`INSERT INTO registers(firstName, lastName, gender, email, password, number)
                    values(?, ?, ?, ?, ?,?)`,
        [first_name, last_name, gender, email, password, number],
        (error, result, fields) => {
            if (error) return callBack(error)
            return callBack(null, result)
        }
    )
}

export const get = (callBack: Function) => {
    pool.query(`SELECT * FROM registers`, (error, result) => {
        if (error) return callBack(error)
        return callBack(null, result)
    })
}