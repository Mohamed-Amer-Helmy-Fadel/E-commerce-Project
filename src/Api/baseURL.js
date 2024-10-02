
import axios from "axios";
export const API_BASE_URL = "http://localhost:8000";
const baseURL = axios.create({
    baseURL: API_BASE_URL,
    // baseURL: "http://localhost:8000",
    // baseURL: "http://127.0.0.1:8000",
    });
export default baseURL;