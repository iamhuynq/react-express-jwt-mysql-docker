import { create, get, getByID, updateUser, deleteUser, getUserByUserEmail } from './user.service'
import { genSaltSync, hashSync, compareSync } from 'bcrypt'
import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken';

export const createUser = (req: Request, res: Response) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt)
    create(body, (err: any, result: any) => {
        if (err) {
            console.log(err)
            let error = 'Database connection error';
            if (err.code == 'ER_DUP_ENTRY') {
                error = 'Email already be used'
            }
            return res.status(500).json({
                success: 0,
                message: error,
            })
        }
        return res.status(200).json({
            success: 1,
            data: result,
        })
    })
}

export const getUsers = (req: Request, res: Response) => {
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

export const getUserByUserId = (req: Request, res: Response) => {
    const id = req.params.id;
    getByID(id, (err: any, results: any) => {
        if (err) {
            console.log(err);
            return;
        }
        if (!results) {
            return res.json({
                success: 0,
                message: "Record not found"
            });
        }
        results.password = undefined;
        return res.json({
            success: 1,
            data: results
        });
    });
}

export const update = (req: Request, res: Response) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err: any, results: any) => {
        if (err) {
            console.log(err);
            return;
        }
        if (!results) {
            return res.json({
                success: 0,
                message: "Updated failed"
            });
        }
        return res.json({
            success: 1,
            message: "Updated successfully"
        });
    });
}

export const deleteUserById = (req: Request, res: Response) => {
    deleteUser(req.body.id, (err: any, results: any) => {
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
            message: "User deleted successfully"
        });
    });
}

export const login = (req: Request, res: Response) => {
    const body = req.body;
    getUserByUserEmail(body.email, (err: any, results: any) => {
        if (err) {
            console.log(err);
        }
        if (!results) {
            return res.json({
                success: 0,
                message: "Invalid email or password"
            });
        }
        const result = compareSync(body.password, results.password);
        if (result) {
            results.password = undefined;
            const jsontoken = sign({ result: results }, "qwe1234", {
                expiresIn: "1h"
            });
            res.cookie('TOKEN', jsontoken, { expires: new Date(Date.now() + 900000), httpOnly: true });
            return res.json({
                success: 1,
                message: "login successfully",
            });
        } else {
            return res.json({
                success: 0,
                message: "Password is not correct"
            });
        }
    });
}

export const logout = (req: Request, res: Response) => {
    res.clearCookie('TOKEN');
    return res.json({
        success: 1,
    });
};

export const getInfo = (req: Request, res: Response) => {
    const userEmail = res.locals.userEmail
    return res.json({
        success: 1,
        email: userEmail
    });
};