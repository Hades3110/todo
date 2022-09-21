import {getRepository} from "typeorm";
import {Todo} from "../entity/Todo";
import {ITodo, IUpdateTodo} from "../Interfaces/Todo";

export default ({
    async getAll() {
        const todo = await getRepository(Todo).find();
        todo.sort((a, b) => a.id - b.id);

        return todo;
    },
    async getOne(id: number) {

        if (!Number(id)) return null;

        const todo = await getRepository(Todo).findOne({
            where: { id }
        })

        if (todo) return todo;

        return null;
    },
    async createTodo(body: ITodo) {
        if (!body) {
            throw null;
        }

        const todo =  getRepository(Todo).create(body);

        return await getRepository(Todo).save(todo);
    },
    async updateTodo(id: number, body: IUpdateTodo) {
        if (!Number(id)) {
            throw null;
        }
        const todo = await getRepository(Todo).findOne({
            where: { id }
        });
        if (todo) {
            getRepository(Todo).merge(todo, {...body, updated_at: new Date()})
            return await getRepository(Todo).save(todo);
        }
        return null
    },
    async deleteTodo(id: number) {
        if (!Number(id)) {
            throw null;
        }
        const todo = await getRepository(Todo).findOne({
            where: { id }
        });
        if (todo) {
            return getRepository(Todo).delete(id);
        }
        return null;
    }
})
