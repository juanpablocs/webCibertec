import axios from "axios";
import { apiURL } from "../api";

export default async function deleteService(id) {
  try {
    const service = await axios.delete(`${apiURL}/services/${id}`);
    return service;
  } catch (error) {
    return null;
  }
}
