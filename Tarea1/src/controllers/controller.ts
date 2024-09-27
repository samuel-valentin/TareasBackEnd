import { Request, Response } from "express";

class UsersRole {
    listAll(req: Request, res: Response){
        // res.send([]);
        res.send('Lista de usuarios');
    }
}

const usersRole = new UsersRole();
export default usersRole;
