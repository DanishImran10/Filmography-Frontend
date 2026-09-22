import { Link, useNavigate } from "react-router";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import BASE_URL from "../BaseUrl";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  async function logoutClicked() {
    const response = await axios.post(
      `${BASE_URL}/api/auth/logout`,
      {},
      {
        withCredentials: true,
      },
    );

    if (response.status === 201) {
      setUser(null);
      navigate("/login");
    }
  }

  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-gray-800 text-white">
      <Link
        to="/"
        className="text-xl font-bold hover:text-gray-300 cursor-pointer"
      >
        <img src="/images/logo.png" className="w-40" />
      </Link>
      <div className="space-x-4">
        <Link to="/movies" className="hover:text-gray-300 cursor-pointer">
          Movies
        </Link>

        {user && (
          <Link
            to={`/watchlist/${user}`}
            className="hover:text-gray-300 cursor-pointer"
          >
            Watchlist
          </Link>
        )}
        {user ? (
          <button
            className="hover:text-gray-300 cursor-pointer"
            onClick={logoutClicked}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="hover:text-gray-300 cursor-pointer">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
