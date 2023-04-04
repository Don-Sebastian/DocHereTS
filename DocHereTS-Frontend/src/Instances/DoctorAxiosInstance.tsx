import axios from "axios";

const axiosInstanceDoctor = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_PORT}`,
  timeout: 8000,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("jwtDoc"),
  },
});

export default axiosInstanceDoctor;
