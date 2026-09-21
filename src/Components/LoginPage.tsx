import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import getAuth from "../utils/getAuth";
import { AuthContext } from "./AuthContext";

type Login = {
  email: string,
  password: string
};

function LoginPage() {
  const [userCredentials, setUserCredentials] = useState<Login>({
    email: "",
    password: ""
  });

  const [errorResponse, setErrorResponse] = useState("");

  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  async function handleSubmission(event: React.UIEvent) {
    event.preventDefault();

    if (userCredentials.email === "" || userCredentials.password === "")
    {
      setErrorResponse("Please fill in all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/login", userCredentials, {
        withCredentials: true
      });
    }
    catch (error) {
      if (axios.isAxiosError(error))
        setErrorResponse(error.response?.data.error);
      return;
    }

    const userId = await getAuth();
    setUser(userId);
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-gray-800 p-6 rounded w-80">
        <h2 className="text-white text-xl mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userCredentials.email}
          onChange={(e) => {
            setUserCredentials((prev) => {
              return {
                ...prev,
                email: e.target.value
              };
            });
          }}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userCredentials.password}
          onChange={(e) => {
            setUserCredentials((prev) => {
              return {
                ...prev,
                password: e.target.value
              };
            });
          }}
        />

        <button className="bg-blue-500 w-full mt-2 py-2 rounded text-white hover:bg-blue-600 cursor-pointer"
          onClick={(e) => handleSubmission(e)}>
          Login
        </button>

        <p className="text-sm text-red-400 mt-4 text-center">
          {errorResponse !== "" && errorResponse}
        </p>

        <p className="text-sm text-gray-400 mt-2 text-center">
          Don't have an account?
          <a href="/signup" className="text-blue-400 ml-1 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
