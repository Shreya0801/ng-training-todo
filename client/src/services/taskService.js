import axios from "axios";

const API = "http://localhost:5000/api";

export const getTasks = () => axios.get(`${API}/tasks`);
export const createTask = (task) => axios.post(`${API}/task`, task);
export const updateTask = (id, task) => axios.put(`${API}/task/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API}/task/${id}`);
