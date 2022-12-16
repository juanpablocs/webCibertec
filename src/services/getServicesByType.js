import axios from "axios";
import { apiURL } from "../api";

export default async function getServicesByType(type) {
  try {
    const services = await axios.get(`${apiURL}/services?type=${type}`);
    const res = services.data;
    return res;
  } catch (error) {
    return [];
  }
}
