import { Request, Response } from 'express'
import { verify } from 'jsonwebtoken';

export const Authenticate = (req: Request, res: Response, next: any) => {
    if(!req.cookies.TOKEN){
        return res.status(401).json({
            success: 0
        })
    }
    verify(req.cookies.TOKEN, 'qwe1234', function(err: any, decoded: any) {
        if (err) return res.status(401).json({
            success: 0
        })
        res.locals.userEmail = decoded.result.email;
        next(); 
    });
};