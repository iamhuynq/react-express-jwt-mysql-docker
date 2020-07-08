import { pool } from '../../config/database'

export const create = (data: any, callBack: Function) => {
    console.log('AAAA',data)
    const { title, author, image } = data;
    pool.query(`INSERT INTO books(title, author, image)
                    values(?, ?, ?)`,
        [title, author, image],
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

export const deleteBook = (id: number, callBack: Function) => {
    pool.query(
        `delete from books where id = ?`,
        [id],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
}