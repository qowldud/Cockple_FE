import axios from "axios";

const api = axios.create({
  baseURL: "https://cockple.store",
});

export default api;
