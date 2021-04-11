import axios from "axios";
import { setupCache } from "axios-cache-adapter";

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

export default axios.create({
  adapter: cache.adapter,
  method: "GET",
  baseUrl: "https://google-news.p.rapidapi.com/v1",
  params: { lang: "en", country: "US", topic: "technology" },
  headers: {
    "x-rapidapi-key": "a24c131918msh6c6714c147c372fp131f0ejsna3c8463f0ba7",
    "x-rapidapi-host": "google-news.p.rapidapi.com",
  },
});
