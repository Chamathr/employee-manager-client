import axios from "axios";
import { BASE_URL, BASE_URL_PREFIX } from "../constants/apiConstants";

const apiInstance = axios.create({
  baseURL: `${BASE_URL}/${BASE_URL_PREFIX}`,
  timeout: 3000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
    cache: "no-cache",
    mode: "cors",
    redirect: "follow",
    withCredentials: true,
    referrer: "no-referrer",
  },
});

export { apiInstance } 