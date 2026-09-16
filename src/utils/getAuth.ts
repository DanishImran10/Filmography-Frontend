import axios from "axios";

async function getAuth() : Promise<string | null> {
  const response = await axios.get("http://localhost:5000/api/auth", {
    withCredentials: true,
  });

  return response.data.user?.id;
}

export default getAuth;