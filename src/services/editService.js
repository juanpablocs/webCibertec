import axios from "axios";
import { apiURL } from "../api";

export default async function editService(input, id) {
  try {
    const service = await axios.put(`${apiURL}/services/${id}`, input);
    const res = service.data;
    return res;
  } catch (error) {
    return null;
  }
}
