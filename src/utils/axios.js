import axios from "axios";
import { getJWT } from "./localStorage";

export const axiosInstance = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop",
  headers: { "Content-Type": "application/json" },
});

export function requestSignup(body, onSuccess, onError) {
  return axiosInstance
    .post("/auth/signup", body)
    .then((res) => onSuccess(res, body))
    .catch(onError);
}

export function requestLogin(body, onSuccess, onError) {
  return axiosInstance
    .post("/auth/signin", body)
    .then((res) => onSuccess(res, body))
    .catch(onError);
}

export function loadTodos(onSuccess, onError) {
  return axiosInstance
    .get("/todos", {
      headers: {
        Authorization: `Bearer ${getJWT()}`,
      },
    })
    .then(onSuccess)
    .catch(onError);
}

export function createTodo(body, onSuccess, onError) {
  return axiosInstance
    .post("/todos", body, {
      headers: {
        Authorization: `Bearer ${getJWT()}`,
      },
    })
    .then(onSuccess)
    .catch(onError);
}

export function updateTodo(todoId, body, onSuccess, onError) {
  return axiosInstance
    .put(`/todos/${todoId}`, body, {
      headers: {
        Authorization: `Bearer ${getJWT()}`,
      },
    })
    .then(onSuccess)
    .catch(onError);
}

export function deleteTodo(todoId, onSuccess, onError) {
  return axiosInstance
    .delete(`/todos/${todoId}`, {
      headers: {
        Authorization: `Bearer ${getJWT()}`,
      },
    })
    .then(onSuccess)
    .catch(onError);
}
