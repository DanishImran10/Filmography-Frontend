import { useNavigate } from "react-router";
import type { SearchTileType } from "./SearchBar";

type SearchTileProps = {
    key: string,
    movie: SearchTileType
};

function SearchTile(props: SearchTileProps) {
  const navigate = useNavigate();  

  return (
    <>
      <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 cursor-pointer"
        onClick={() => navigate(`/movie/${props.movie.id}`)}>
        <img
          src={props.movie.posterUrl}
          className="w-12 h-16 object-cover rounded"
        />
        <div className="flex flex-col">
          <span className="text-white font-medium">{props.movie.title}</span>
          <span className="text-gray-400 text-sm">{`${props.movie.year} • ${props.movie.imdbRating} IMDb`}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>
    </>
  );
}

export default SearchTile;
