import axios from "axios";

const API_BASE = 'http://localhost:5444/';

export const getAll = async (sortPatam) => {
    return await axios.get(`${API_BASE}todo?sort=${sortPatam}`);
}

export const createTodo = async (todo) => {
    return await axios.post(`${API_BASE}todo`, todo);
}

export const deleteTodo = async (id) => {
    return await axios.delete(`${API_BASE}todo/${id}`);
}

export const changeTodo = async (todo) => {
    return await axios.put(`${API_BASE}todo/${todo.id}`, todo);
}
