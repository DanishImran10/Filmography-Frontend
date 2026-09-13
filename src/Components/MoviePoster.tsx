import { Link } from "react-router";
import type { Poster } from "./HomePage";

type PosterProp = {
  poster: Poster
};

function MoviePoster(props : PosterProp) {
  return (
    <Link to={`/movie/${props.poster.id}`}>
      <div className="bg-gray-800 rounded overflow-hidden shadow-lg p-3 cursor-pointer">
        <img src={props.poster.posterUrl} className="w-full h-64 object-cover rounded" />
      </div>
    </Link>
  );
}

export default MoviePoster;
