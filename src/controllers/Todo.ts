import {Response, Request, NextFunction} from "express";
import  todo  from "../services/todo"
import {ExceptionMessages, HttpErr} from "../exceptions";
import StatusCode from "../exceptions/statusCodes";

class Todo {
    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await todo.getAll();
            res.status(StatusCode.SuccessRequest).json(data);
        } catch (err) {
            next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
        }
    };
    public async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            const data = await todo.getOne(id);
            if (!data) {
                next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.TODO));
            }
            res.status(StatusCode.SuccessRequest).json(data);
        } catch (err) {
            next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
        }
    }
    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const data = await todo.createTodo(body);

            res.status(StatusCode.CreateRequest).json(data);
        } catch (err) {
            next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
        }
    };
    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const body = req.body;
            const updateData = await todo.updateTodo(id, body);
            if (!updateData) {
                next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.TODO));
            }
            res.status(StatusCode.SuccessRequest).json(updateData);
        } catch (err) {
            next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
        }
    } ;
    public async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const deletedData = await todo.deleteTodo(id);
            if (!deletedData) {
                next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.TODO));
            }
            res.status(StatusCode.SuccessRequest).json(deletedData);
        } catch (err) {
            next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
        }
    };
}

export const TodoController = new Todo();
