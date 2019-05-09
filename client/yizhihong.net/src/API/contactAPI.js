import axios from "axios";
import { TOKEN, HOST } from "../config/config";

const postContact = payload => {
  return axios.post(`${HOST}contact`, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`
    }
  });
};

export {postContact}