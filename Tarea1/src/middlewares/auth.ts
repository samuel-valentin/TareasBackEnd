import {Request, Response, NextFunction} from "express";
import {User} from "../types/user";


export const roles = (permittedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = { 
            role: 'gerente', 
            name: 'fakeuser',
            email: 'fake@mail.com',
            id: '0'
        }
        if (permittedRoles.includes(user.role)) {
            return next(); 
        } 
        // res.status(403).send('Acceso denegado');
        res.sendStatus(403);
    };
  };


//   'admin', 'gerente', 'cliente'