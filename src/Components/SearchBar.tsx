import SearchDropdown from "./SearchDropdown";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export type SearchTileType = {
  id: string,
  posterUrl: string,
  title: string,
  imdbRating: number,
  year: number
};

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState<SearchTileType[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText === "")
      {
        setMovies([]);
        return;
      }
      
      fetchMoviesByQuery();

      async function fetchMoviesByQuery() {
        const response = await axios.get(`http://localhost:5000/api/movies/search?search=${searchText}`);
        setMovies(response.data);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchText]);

  function goToMoviesPage() {
    if (searchText === "")
      return;
    
    setSearchText("");
    setMovies([]);
    navigate(`/movies?search=${searchText}`);
  }

  return (
    <div className="relative w-full max-w-xl">
      
      {/* Input + Button */}
      <div className="flex">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full px-4 py-2 rounded-tl bg-gray-800 text-white border border-gray-700 focus:outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button className="bg-blue-500 px-4 rounded-tr flex items-center justify-center hover:bg-blue-600 cursor-pointer"
          onClick={() => goToMoviesPage()}>
          <img src="./images/search-icon.png" className="w-5 h-5" />
        </button>
      </div>

      <SearchDropdown query={searchText} movies={movies} goToMoviesPage={goToMoviesPage} />
    </div>
  );
}

export default SearchBar;