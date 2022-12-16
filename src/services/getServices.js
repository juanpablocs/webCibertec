import axios from "axios";
import { apiURL } from "../api";

export default async function getServices() {
  try {
    const services = await axios.get(`${apiURL}/services`);
    const res = services.data;
    return res;
  } catch (error) {
    return [];
  }
}
