import { Link } from "react-router"; 

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-xl font-bold hover:text-gray-300 cursor-pointer">
          FILMOGRAPHY
        </Link>
      <div className="space-x-4">
        <Link to="/movies" className="hover:text-gray-300 cursor-pointer">
          Movies
        </Link>
        <Link to="/watchlist/:userId" className="hover:text-gray-300 cursor-pointer">
          Watchlist
        </Link>
        <Link to="/login" className="hover:text-gray-300 cursor-pointer">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;