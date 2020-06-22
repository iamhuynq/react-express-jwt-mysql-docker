import { create, get } from './book.service'
import { Request, Response } from 'express'

export const createBook = (req: Request, res: Response) => {
    const body = req.body;
    console.log(body)
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

export const getBook = (req: Request, res: Response) => {
    get((err: any, result: any) => {
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