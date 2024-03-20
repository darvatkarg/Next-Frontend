import { commonRequest } from "./ApiCall";

export const register = async (data) => {
  return await commonRequest("POST", `/register`, data);
};

export const login = async (data) => {
  return await commonRequest("POST", `/login`, data);
};

export const getAllUsers = async () => {
  return await commonRequest("GET", `/findall`);
};

export const getUserById = async (id) => {
  return await commonRequest("GET", `/find/${id}`);
};

export const updateUser = async (id, data, header) => {
  return await commonRequest("PUT", `/update/${id}`, data, header);
};

export const deleteUser = async (id, header) => {
  return await commonRequest("DELETE", `/delete/${id}`, header);
};
