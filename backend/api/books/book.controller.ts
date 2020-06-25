import { create, get, deleteBook } from './book.service'
import { Request, Response } from 'express'

export const createBook = (req: Request, res: Response) => {
    const body = req.body;
    console.log(req.cookies['token']);

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
        res.cookie('token', 'test_token', { maxAge: 900000, httpOnly: true });
        return res.status(200).json({
            success: 1,
            data: result,
        })
    })
}

export const deleteBookById = (req: Request, res: Response) => {
    deleteBook(req.body.id, (err: any, results: any) => {
        if (err) {
            console.log(err);
            return;
        }
        if (!results) {
            return res.json({
                success: 0,
                message: "Record Not found"
            });
        }
        return res.json({
            success: 1,
            message: "Book deleted successfully"
        });
    });
}