import Navbar from "./Navbar";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import type { Movie } from "./MoviesPage";
import axios from "axios";
import { useAddToWatchlist, useRemoveFromWatchlist } from "../utils/editWatchlist";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const id = movieId!;
  
  const [movie, setMovie] = useState<Movie>();
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  const addMovie = useAddToWatchlist(id, setIsInWatchlist);
  const removeMovie = useRemoveFromWatchlist(id, setIsInWatchlist);

  useEffect(() => {
    async function getMovieDetails() {
      const response = await axios.get(`http://localhost:5000/api/movies/${movieId}`, {
        withCredentials: true
      });
      setMovie(response.data);
      setIsInWatchlist(response.data.isInWatchlist);
    }

    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <Navbar />

      {movie ? (
        <div className="px-25">
          <div className="p-6 flex justify-between mt-12">
            <div className="w-180 space-y-2">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <p className="text-gray-400">{`${movie.year} • ${movie.runtime}`}</p>
              <p className="text-gray-400">{`IMDb: ${movie.imdbRating} | Rotten Tomatoes: ${movie.tomatoScore}`}</p>
              <p className="text-gray-400">{`Genre: ${movie.genre}`}</p>

              <p className="mt-4 text-gray-300 w-150">
                {movie.plot}
              </p>

              <p className="text-gray-400 mt-2">{`Director: ${movie.director}`}</p>
              <p className="text-gray-400">{`Writer: ${movie.writer}`}</p>
              <p className="text-gray-400">{`Cast: ${movie.cast}`}</p>

              {
                isInWatchlist ? 
                  <button className="bg-red-500 px-5 py-3 mt-5 rounded hover:bg-red-600 cursor-pointer"
                    onClick={() => removeMovie()}>
                    Remove from Watchlist
                  </button> :
                  <button className="bg-blue-500 px-5 py-3 mt-5 rounded hover:bg-blue-600 cursor-pointer"
                    onClick={() => addMovie()}>
                    Add to Watchlist
                  </button>
              }
            </div>

            <div className="h-65">
              <img src={movie.posterUrl} className="rounded w-full" />
            </div>
          </div>
        </div> ) :

        <div className="absolute top-1/2 left-1/2 w-15 h-15 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      }
    </>
  );
}

export default MovieDetailsPage;
