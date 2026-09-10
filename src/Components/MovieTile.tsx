import { Link } from "react-router";

function MovieTile() {
  return (
    <div className="bg-gray-800 rounded overflow-hidden shadow-lg p-3">
      <Link to="/movie/:movieId">
        <img src="poster.jpg" className="w-full h-64 object-cover rounded cursor-pointer" />
      </Link>

      <div className="mt-3 space-y-1 text-sm">
        <h3 className="text-lg font-semibold">Movie Name</h3>
        <p className="text-gray-400">2023 • 7.8 IMDb • 120 min</p>
        <p className="text-gray-400">Director: John Doe</p>
        <p className="text-gray-300 text-xs line-clamp-3">
          Short plot description goes here...
        </p>
      </div>

      <button className="mt-3 w-full bg-blue-500 py-2 rounded hover:bg-blue-600 cursor-pointer">
        Add to Watchlist
      </button>
    </div>
  );
}

export default MovieTile;
