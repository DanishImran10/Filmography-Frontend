import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import getAuth from "../utils/getAuth";
import { AuthContext } from "./AuthContext";
import BASE_URL from "../BaseUrl";

type SignUp = {
  name: string,
  email: string,
  password: string
};

function SignUpPage() {
  const [userCredentials, setUserCredentials] = useState<SignUp>({
    name: "",
    email: "",
    password: ""
  });

  const [errorResponse, setErrorResponse] = useState("");

  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  async function handleSubmission(event: React.UIEvent) {
    event.preventDefault();

    if (userCredentials.name === "" || userCredentials.email === "" || 
      userCredentials.password === "")
    {
      setErrorResponse("Please fill in all fields.");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/auth/register`, userCredentials, {
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
    <div className="min-h-screen relative flex items-center justify-center bg-gray-900 text-white">
  
      {/* <!-- Background Image --> */}
      <div className="absolute inset-0">
        <img
          src="/images/background.jpg"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* <!-- Main Container --> */}
      <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-start">
    
        {/* LEFT SIDE: Branding */}
        <div className="flex flex-col justify-center space-y-4 mt-8 w-100">

          <div className="">
            <img src="/images/logo.png" className="w-70" />
          </div>

          <p className="text-gray-300 text-lg">
            Track your favorite movies, build your watchlist and never lose what you want to watch.
          </p>
        </div>

        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl p-8 shadow-xl w-100">
          <h2 className="text-2xl font-semibold mb-6">
            Register
          </h2>

          <form className="space-y-4">

            <input
              type="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userCredentials.name}
              onChange={(e) => {
                setUserCredentials((prev) => {
                  return {
                    ...prev,
                    name: e.target.value
                  }
                });
                }
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userCredentials.email}
              onChange={(e) => {
                setUserCredentials((prev) => {
                  return {
                    ...prev,
                    email: e.target.value
                  }
                });
                }
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userCredentials.password}
              onChange={(e) => {
                setUserCredentials((prev) => {
                  return {
                    ...prev,
                    password: e.target.value
                  }
                });
                }
              }
            />

            <button className="w-full bg-blue-500 py-3 rounded hover:bg-blue-600 font-medium"
              onClick={(e) => handleSubmission(e)}>
              Create Account
            </button>

            <p className="text text-red-400 text-center">
                {errorResponse !== "" && errorResponse}
            </p>

            <p className="text text-gray-400 text-center -mt-4">
                Already have an account?
                <a href="/login" className="text-blue-400 ml-1 hover:underline">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
