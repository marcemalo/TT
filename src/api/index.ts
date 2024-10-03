import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type" : "application/json"
    },
    timeout: 10000
})

export default instance