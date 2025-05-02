import { createTodoController, getTodosController, getTodoByIdController, updateTodoController, deleteTodoController } from './todo.controller';
import z from 'zod';
import { Express, NextFunction, Response, Request } from 'express';
import { todoSchema } from './../validators/todo.Validator';

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

const todo = (app: Express) => {
    // create todo
    app.route("/todo").post(
        validateRequest(todoSchema),
        async (req, res, next) => {
            try {
                await createTodoController(req, res);
            } catch (error: any) {
                next(error);
            }
        }
    );

    // get all todos
    app.route("/todo").get(
        async (req, res, next) => {
            try {
                await getTodosController(req, res);
            } catch (error: any) {
                next(error);
            }
        }
    );

    // get todo by id
    app.route("/todo/:id").get(
        async (req, res, next) => {
            try {
                await getTodoByIdController(req, res);
            } catch (error: any) {
                next(error);
            }
        }
    );

    // update todo
    app.route("/todo/:id").put(
        validateRequest(todoSchema),
        async (req, res, next) => {
            try {
                await updateTodoController(req, res);
            } catch (error: any) {
                next(error);
            }
        }
    );

    // delete todo
    app.route("/todo/:id").delete(
        async (req, res, next) => {
            try {
                await deleteTodoController(req, res);
            } catch (error: any) {
                next(error);
            }
        }
    );

}

export default todo;