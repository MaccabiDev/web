import axios from "axios";
const KEY = "AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    chart: "mostPopular",
    maxResults: 50,
    key: KEY,
  },
});
