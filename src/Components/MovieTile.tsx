import { Link } from "react-router";
import type { Movie } from "./MoviesPage";
import { useState } from "react";
import { useAddToWatchlist, useRemoveFromWatchlist } from "../utils/editWatchlist.ts";

type MovieTileProps = {
  movie: Movie
};

function MovieTile(props: MovieTileProps) {
  const [isInWatchlist, setIsInWatchlist] = useState(props.movie.isInWatchlist);

  const addMovie = useAddToWatchlist(props.movie.id, setIsInWatchlist);
  const removeMovie = useRemoveFromWatchlist(props.movie.id, setIsInWatchlist);

  return (
    <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
      <Link to={`/movie/${props.movie.id}`}>
        <img src={props.movie.posterUrl} className="w-full h-80 object-fill rounded-t cursor-pointer" />
      </Link>

      <div className="p-3">
        <div className="space-y-1 text-sm">
          <h3 className="text-lg font-semibold truncate">{props.movie.title}</h3>
          <p className="text-gray-400">{`${props.movie.year} • ${props.movie.imdbRating} IMDb • ${props.movie.runtime}`}</p>
          <p className="text-gray-400 truncate">{`Director: ${props.movie.director}`}</p>
          <p className="text-gray-300 text-xs line-clamp-3 min-h-[3rem]">
            {props.movie.plot}
          </p>
        </div>

        {
          isInWatchlist ? 
            <button className="mt-3 w-full bg-red-500 py-2 rounded hover:bg-red-600 cursor-pointer"
              onClick={() => removeMovie()}>
              Remove from Watchlist
            </button> :
            <button className="mt-3 w-full bg-blue-500 py-2 rounded hover:bg-blue-600 cursor-pointer"
              onClick={() => addMovie()}>
              Add to Watchlist
            </button>
        }
      </div>
    </div>
  );
}

export default MovieTile;
