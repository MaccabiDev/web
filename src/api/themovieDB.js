import axios from "axios";
const KEY = "0f1484783f692d827b4e2e08c9a0c3e2";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: KEY,
  },
});
