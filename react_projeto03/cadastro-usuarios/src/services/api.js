import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;
//vai se preciso puxar dentro da pagina a api
