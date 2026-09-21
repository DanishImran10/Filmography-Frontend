import { useRemoveFromWatchlist } from "../utils/editWatchlist";
import type { WatchlistMovie } from "./WatchlistPage";
import { Link } from "react-router";

type WatchlistItemProps = {
  entry: WatchlistMovie;
  fetchWatchlist: () => Promise<void>;
};

function WatchlistItem(props: WatchlistItemProps) {
  const removeMovie = useRemoveFromWatchlist(props.entry.movieId, () => {});

  return (
    <div className="bg-gray-800 rounded">
      <Link to={`/movie/${props.entry.movieId}`}>
        <img
          src={props.entry.movie.posterUrl}
          className="w-full h-80 object-fill rounded-t hover:cursor-pointer"
        />
      </Link>

      <div className="p-2">
        <h3 className="mt-2 truncate">{props.entry.movie.title}</h3>
        <p className="text-gray-400">
          {`${props.entry.movie.year} • ${props.entry.movie.imdbRating} • ${props.entry.movie.runtime}`}
        </p>
        <p className="text-gray-400 truncate">{`Director: ${props.entry.movie.director}`}</p>

        <div className="flex gap-2 mt-3">
          <button
            className="flex-1 bg-green-500 py-2 rounded hover:bg-green-600 text-sm cursor-pointer"
            onClick={() => {
              removeMovie();
              props.fetchWatchlist();
            }}
          >
            Mark Watched
          </button>

          <button
            className="flex-1 bg-red-500 py-2 rounded hover:bg-red-600 text-sm cursor-pointer"
            onClick={() => {
              removeMovie();
              props.fetchWatchlist();
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default WatchlistItem;
