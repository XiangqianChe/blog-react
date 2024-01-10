import axios from "axios";
const API = axios.create({
    baseURL: "http://dummyjson.com/",
    timeout: 5000,
    headers: { "Content-Type": "application/json;Access-Control-Allow-Origin;" }
});
export default API;