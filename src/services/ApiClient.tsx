import axios, { CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: "73f7faeef29640aabec9db30378cc80b",
    }
}
export default axios.create(config)