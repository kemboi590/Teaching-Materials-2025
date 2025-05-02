import "dotenv/config"
import { createUserService, userLoginService } from "./auth.service"

import bcrypt from 'bcryptjs';


import { Request, Response } from "express";

export const registerUserController = async (req: Request, res: Response) => {
    try {
        // "firstName": "Brian",
        // "lastName": "Kemboi",
        // "email": "test@mail.com",
        // "password": "mypass"

        const user = req.body;
        const password = user.password;
        const hashedPassword = bcrypt.hashSync(password, 10)
        user.password = hashedPassword;

        const createUser = await createUserService(user)
        if (!createUser) return res.json({ message: "user not created" })
        return res.status(201).json({ message: createUser });
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
}