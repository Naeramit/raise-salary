import axios from "./axios";

export const login = (input) => axios.post("/auth/login", input);
export const getUser = () => axios.get("/auth/getuser");
