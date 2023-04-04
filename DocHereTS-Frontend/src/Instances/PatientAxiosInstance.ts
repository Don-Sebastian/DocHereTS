import axios from "axios";

const axiosInstancePatient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_PORT}`,
  timeout: 8000,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("jwtUser"),
  },
});

export default axiosInstancePatient;
