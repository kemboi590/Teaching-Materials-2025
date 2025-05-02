
import { registerUserController, loginUserController } from './auth.controller';
import { userSchema, userLoginShema } from './../validators/userValidator';
import z from 'zod';
import { Express, NextFunction, Response, Request } from 'express';

const validateRequest = (schema: z.ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json(result.error);
            return;
        }
        next()
    }
}

const user = (app: Express) => {
    // regitser
    app.route("/auth/register").post(
        validateRequest(userSchema), //validate the request body
        async (req, res, next) => {
            try {
                await registerUserController(req, res);  //call the controller if the validation passes
            } catch (error) {
                next(error);
            }
        }
    );

    // login 
    app.route("/auth/login").post(
        validateRequest(userLoginShema),
        async (req, res, next) => {
            try {
                await loginUserController(req, res)
            } catch (error) {
                next(error)
            }
        }
    );
};

export default user;