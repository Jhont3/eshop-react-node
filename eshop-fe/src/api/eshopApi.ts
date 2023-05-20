import axios from "axios";

export const eshopApi = axios.create({
    baseURL: "http://localhost:4000/api",
    headers: {
    }
})
