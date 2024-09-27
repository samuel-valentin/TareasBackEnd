import { Request, Response } from "express";
import User from './../models/user';
import { HTTP_STATUS_CODE } from "../types/http-status-codes";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user: any) => {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!);
    return token;
};

const registerUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, role, password, status } = req.body;

        // Validar que el usuario no se encuentre repetido en la base de datos
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({ message: 'El usuario ya existe' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario
        const newUser = new User({
            firstName,
            lastName,
            email,
            role,
            password: hashedPassword,
            status,
        });

        // Almacenar el usuario en la base de datos
        await newUser.save();

        return res.status(HTTP_STATUS_CODE.CREATED).json({ message: 'Usuario creado con éxito' });
    } catch (error) {
        console.error(error);
        return res.status(HTTP_STATUS_CODE.SERVER_ERROR).json({ message: 'Error al crear el usuario' });
    }
};

const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Buscar usuario en la base de datos
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({ message: 'Usuario no encontrado' });
        }

        // Verificar si el usuario está eliminado o bloqueado
        if (user.status === 'eliminado' || user.status === 'bloqueado') {
            return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({ message: 'Usuario no autorizado' });
        }

        // Verificar contraseña
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({ message: 'Contraseña incorrecta' });
        }

        // Si todo es válido, devolver un token de autenticación
        const token = generateToken(user);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(HTTP_STATUS_CODE.SERVER_ERROR).json({ message: 'Error al autenticar usuario' });
    }
};


export default { registerUser, loginUser };