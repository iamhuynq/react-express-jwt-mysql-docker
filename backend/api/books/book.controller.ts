import { create, get, deleteBook } from './book.service'
import { Request, Response } from 'express'

export const createBook = (req: any, res: Response) => {
    const { title, author } = req.body;
    const { file }  = req.files;
    file.mv(`./public/upload/${file.name}`, (err: any) => {
        if (err) {
            return res.status(401).json({
                success: 0,
                message: 'Something wrong!'
            })
        }
        create({
            title: title,
            author: author,
            image: `${req.files.file.name}`,
        }, (error: any, result: any) => {
            if(error) {
                return res.status(401).json({
                    success: 0,
                    message: 'Something wrong!'
                })
            }
            return res.status(200).json({
                success: 1,
                message: result,
            })
        })
    });
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