import { pool } from '../../config/database'

export const create = (data: any, callBack: Function) => {
    const { email, password } = data;
    pool.query(`INSERT INTO users(email, password)
                    values(?, ?)`,
        [email, password],
        (error, result, fields) => {
            if (error) return callBack(error)
            return callBack(null, result)
        }
    )
}

export const get = (callBack: Function) => {
    pool.query(`SELECT * FROM users`, (error, result) => {
        if (error) return callBack(error)
        return callBack(null, result)
    })
}

export const getByID = (id: string, callBack: Function) => {
    pool.query(`SELECT * FROM users WHERE id=?`, [id], (error, result) => {
        if (error) return callBack(error)
        return callBack(null, result)
    })
}

export const updateUser = (data: any, callBack: Function) => {
    pool.query(
        `UPDATE users SET firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
        [
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number,
            data.id
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
}

export const deleteUser = (id: number, callBack: Function) => {
    pool.query(
        `delete from registration where id = ?`,
        [id],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
}

export const getUserByUserEmail = (email: string, callBack: Function) => {
    pool.query(`SELECT * FROM users WHERE email=?`, [email], (error, result) => {
        if (error) return callBack(error)
        return callBack(null, result[0])
    })
}