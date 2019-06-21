import axios from "axios";
import { HOST } from "../config/config";

const informationAPI = TOKEN => {
  return axios.get(`${HOST}introductions`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  });
};

export { informationAPI };
