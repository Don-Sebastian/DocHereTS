import axios from "axios";
import { AUTH_BACKEND_PORT } from "../Utils/Config/URLS";

const axiosInstanceAuthPatient = axios.create({
  baseURL: `${AUTH_BACKEND_PORT}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

console.log(localStorage.getItem("jwtUser"), "1111111111111");


export default axiosInstanceAuthPatient;
