import axios from "axios";

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
