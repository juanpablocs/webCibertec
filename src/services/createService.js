import axios from "axios";
import { apiURL } from "../api";

export default async function createService(input) {
  try {
    const service = await axios.post(`${apiURL}/services`, input);
    const res = service.data;
    return res;
  } catch (error) {
    return null;
  }
}
