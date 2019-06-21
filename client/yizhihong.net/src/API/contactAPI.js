import axios from "axios";
import { HOST } from "../config/config";

const postContact = (payload, TOKEN) => {
  return axios.post(`${HOST}contacts`, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`
    }
  });
};

export { postContact };
