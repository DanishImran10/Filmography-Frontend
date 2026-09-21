import SearchTile from "./SearchTile";
import type { SearchTileType } from "./SearchBar";

type SearchDropdownProps = {
  query: string,
  movies: SearchTileType[],
  goToMoviesPage: () => void
};

function SearchDropdown(props: SearchDropdownProps) {
  return (
    <>
      {props.query === "" ? null : props.movies.length === 0 ? (
        <div className="absolute left-0 w-full z-50 px-4 py-3 text-blue-400 bg-black">
            No movies found!
        </div>
      ) : (
        <>
          {/* Dropdown */}
          <div className="absolute left-0 w-full z-50 bg-gray-900 border border-gray-700 rounded-b shadow-lg overflow-hidden">
            {/* Result Item */}
            {props.movies.map((movie) => (
              <SearchTile key={movie.id} movie={movie} />
            ))}

            {/* Show All */}
            <div className="px-4 py-3 text-center text-blue-400 hover:bg-gray-800 cursor-pointer"
                onClick={() => props.goToMoviesPage()}>
              Show all results
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SearchDropdown;
