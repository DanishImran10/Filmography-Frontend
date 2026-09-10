import { Link } from "react-router";

function MoviePoster() {
  return (
    <Link to="/movie/:movieId">
      <div className="bg-gray-800 rounded overflow-hidden shadow-lg p-3 cursor-pointer">
        <img src="poster.jpg" className="w-full h-64 object-cover rounded" />
      </div>
    </Link>
  );
}

export default MoviePoster;
