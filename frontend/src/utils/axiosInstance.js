import axios from 'axios'

export function getBackendURL() {
    return "http://localhost:8000";
}

export function getFrontendURL() {
    return "http://localhost:3000";
}

const axiosInstance = axios.create({
    baseURL: getBackendURL()
});

export default axiosInstance;