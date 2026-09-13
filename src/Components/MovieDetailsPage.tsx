import Navbar from "./Navbar";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import type { Movie } from "./MoviesPage";
import axios from "axios";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    async function getMovieDetails() {
      const response = await axios.get(`http://localhost:5000/api/movies/${movieId}`);
      setMovie(response.data);
    }

    getMovieDetails();
  }, [movieId]);

  if (!movie)
    return (
      <p>Loading...</p>
  );

  return (
    <>
      <Navbar />

      <div className="px-25">
        <div className="p-6 flex justify-between mt-12">
          <div className="w-180 space-y-2">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-gray-400">{`${movie.year} • ${movie.runtime}`}</p>
            <p className="text-gray-400">{`IMDb: ${movie.imdbRating} | Rotten Tomatoes: ${movie.tomatoScore}`}</p>
            <p className="text-gray-400">{`Genre: ${movie.genre}`}</p>

            <p className="mt-4 text-gray-300">
              {movie.plot}
            </p>

            <p className="text-gray-400 mt-2">{`Director: ${movie.director}`}</p>
            <p className="text-gray-400">{`Writer: ${movie.writer}`}</p>
            <p className="text-gray-400">{`Cast: ${movie.cast}`}</p>

            <button className="bg-green-500 px-5 py-3 mt-5 rounded hover:bg-green-600 cursor-pointer">
              Add to Watchlist
            </button>
          </div>

          <div className="h-65">
            <img src={movie.posterUrl} className="rounded w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetailsPage;
