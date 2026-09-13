import Navbar from "./Navbar";
import MovieTile from "./MovieTile";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import axios from "axios";

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
  posterUrl: string
}

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 20;

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(`http://localhost:5000/api/movies?page=${page}&limit=${limit}`);
      setTotalPages(response.data.totalPages);
      setMovies(response.data.movies);
    }

    fetchMovies();
  }, [page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [movies]);

  function goToPage(inc : number)
  {
    const nextPage = Math.max(1, Math.min(page + inc, totalPages));

    setSearchParams({
      page: String(nextPage),
      limit: "20"
    });

    setMovies([]);
  }

  return (
    <>
      <Navbar />

      <div className="p-6">
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full p-2 rounded-l bg-gray-700 text-white border border-gray-500 focus:outline-none"
          />

          <button className="bg-blue-500 px-4 rounded-r flex items-center justify-center hover:bg-blue-600 cursor-pointer">
            <img src="search-icon.png" className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {movies.length === 0 ? <p className="text-white">Loading...</p> : 
            movies.map((movie) => <MovieTile key={movie.id} movie={movie} />)}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center space-x-2">
          <button className="px-3 py-1 bg-gray-700 rounded hover:bg-blue-600 cursor-pointer" 
            onClick={() => goToPage(-1)}>Prev</button>
          <button className="px-3 py-1 bg-gray-700 rounded hover:bg-blue-600 cursor-pointer"
            onClick={() => goToPage(1)}>Next</button>
        </div>
      </div>
    </>
  );
}

export default MoviesPage;
