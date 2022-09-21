import {Router} from "express";
import {TodoController} from "../controllers/Todo";
import {createTodoDto, updateTodoDto} from "../dto/article";
import {validateRequestSchema} from "../middleware/validation";

export const TodoRouter = Router();

TodoRouter
    .get('/', TodoController.getAll)
    .get('/:id', TodoController.getOne)
    .post('/', createTodoDto, validateRequestSchema,TodoController.create)
    .put('/:id', updateTodoDto, validateRequestSchema, TodoController.update)
    .delete('/:id', TodoController.delete);
