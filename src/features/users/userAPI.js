import axios from "axios";

const API = 'http://127.0.0.1:8000/api/users';

export const usersAPI = () => axios.get(API);
export const addUserAPI = (data) => axios.post(API, data);
export const deleteUserAPI = (id) => axios.delete(`${API}/${id}`);
export const updateUserAPI = (id,data) => axios.put(`${API}/${id}`, data);