import axios from "axios";
import BASE_URL from "../BaseUrl";

async function getAuth() : Promise<string | null> {
  const response = await axios.get(`${BASE_URL}/api/auth`, {
    withCredentials: true,
  });

  return response.data.user?.id;
}

export default getAuth;