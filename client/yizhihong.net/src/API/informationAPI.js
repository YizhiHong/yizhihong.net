import axios from "axios";
import { TOKEN, HOST } from "../config/config";

const informationAPI = () => {
  return axios.get(`${HOST}introductions`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
};
export { informationAPI };
