import Navbar from "./Navbar";
import MovieTile from "./MovieTile";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import axios from "axios";
import NavigatePageButton from "./NavigatePageButton";
import SearchBar from "./SearchBar";

export type Movie = {
  id: string,
  title: string,
  year: number,
  runtime: string,
  cast: string,
  director: string,
  writer: string,
  imdbRating: number,
  tomatoScore: number,
  plot: string,
  genre: string,
  posterUrl: string,
  isInWatchlist: boolean
};

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isFetchingMovies, setIsFetchingMovies] = useState(false);

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 20;
  const searchQuery = String(searchParams.get("search")) || "";

  useEffect(() => {
    async function fetchMovies() {
      setIsFetchingMovies(true);
      const response = await axios.get(
        `http://localhost:5000/api/movies?page=${page}&limit=${limit}&search=${searchQuery}`,
        {
          withCredentials: true,
        },
      );
      setTotalPages(response.data.totalPages);
      setMovies(response.data.movies);
      setIsFetchingMovies(false);
    }

    fetchMovies();
  }, [page, limit, searchQuery]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [movies]);

  function goToPage(inc: number) {
    const nextPage = Math.max(1, Math.min(page + inc, totalPages));

    setSearchParams({
      page: String(nextPage),
      limit: "20",
      search: searchQuery
    });

    setMovies([]);
  }

  return (
    <>
      <Navbar />

      <div className="p-6">
        <div className="w-full flex justify-center">
          <SearchBar />
        </div>

        {
          isFetchingMovies ? 
            <div className="absolute top-1/2 left-1/2 w-15 h-15 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              :
            movies.length === 0 ? 
              <h1 className="px-6 py-10 text-3/4xl mb-4">
                {`No movies found with: ${searchQuery}`}
              </h1> : (
              <>
                <h2 className="text-xl mb-4">
                  {searchQuery === "" ? "Movies" : `Showing results for: ${searchQuery}`}
                </h2>

                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  { movies.map((movie) => <MovieTile key={movie.id} movie={movie} />) }
                </div>

                <div className="mt-6 flex justify-center space-x-2">
                  {page !== 1 && <NavigatePageButton page={"Prev"} goToPage={goToPage} />}
                  {page !== totalPages && <NavigatePageButton page={"Next"} goToPage={goToPage} />}
                </div>
              </>
            )
        }
      </div>
    </>
  );
}

export default MoviesPage;
