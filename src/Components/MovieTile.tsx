import { Link } from "react-router";
import type { Movie } from "./MoviesPage";

type MovieTileProps = {
  movie: Movie
};

function MovieTile(props: MovieTileProps) {
  return (
    <div className="bg-gray-800 rounded overflow-hidden shadow-lg p-3">
      <Link to={`/movie/${props.movie.id}`}>
        <img src={props.movie.posterUrl} className="w-full h-64 object-contain rounded cursor-pointer" />
      </Link>

      <div className="mt-3 space-y-1 text-sm">
        <h3 className="text-lg font-semibold truncate">{props.movie.title}</h3>
        <p className="text-gray-400">{`${props.movie.year} • ${props.movie.imdbRating} IMDb • ${props.movie.runtime}`}</p>
        <p className="text-gray-400 truncate">{`Director: ${props.movie.director}`}</p>
        <p className="text-gray-300 text-xs line-clamp-3">
          {props.movie.plot}
        </p>
      </div>

      <button className="mt-3 w-full bg-blue-500 py-2 rounded hover:bg-blue-600 cursor-pointer">
        Add to Watchlist
      </button>
    </div>
  );
}

export default MovieTile;
