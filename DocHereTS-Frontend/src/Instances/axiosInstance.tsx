import axios from "axios";
import { AUTH_BACKEND_PORT, USER_BACKEND_PORT } from "../Utils/Config/URLS";

export const axiosInstanceAuth = axios.create({
  baseURL: `${AUTH_BACKEND_PORT}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivateUser = axios.create({
  baseURL: `${USER_BACKEND_PORT}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});