import { create } from './user.service'
import { genSaltSync, hashSync } from 'bcrypt'
import { Request, Response } from 'express';

export const createUser = (req: Request, res: Response) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync('test123', salt)
    create(body, (err: any, result: any) => {
        if (err) {
            console.log(err)
            return res.status(500).json({
                success: 0,
                message: 'Database connection error',
            })
        }
        return res.status(200).json({
            success: 1,
            data: result,
        })
    })
}