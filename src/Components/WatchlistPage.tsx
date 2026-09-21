import Navbar from "./Navbar";
import WatchlistItem from "./WatchlistItem";
import { useEffect, useState } from "react";
import axios from "axios";

export type WatchlistMovie = {
  id: string,
  movieId: string,
  movie: {
    title: string,
    imdbRating: number,
    year: number,
    runtime: string,
    director: string,
    posterUrl: string
  }
};

function WatchlistPage() {
  const [watchlistMovies, setWatchlistMovies] = useState<WatchlistMovie[]>([]);
  const [fetchingWatchlist, setFetchingWatchlist] = useState(false);

  async function fetchWatchlist() {
      const response = await axios.get("http://localhost:5000/api/watchlist", {
        withCredentials: true
      });
      setWatchlistMovies(response.data);
  }

  useEffect(() => {
    async function getWatchlist() {
      setFetchingWatchlist(true);
      await fetchWatchlist();
      setFetchingWatchlist(false);
    }

    getWatchlist();
  }, []);

  return (
    <>
      <Navbar />

      {
        fetchingWatchlist ? 
          <div className="absolute top-1/2 left-1/2 w-15 h-15 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            :
          watchlistMovies.length === 0 ? 
            <h1 className="px-6 py-10 text-3/4xl mb-4">
              No movies in the watchlist
              <a href="/movies" className="ml-2 text-blue-500">Start Adding</a>
            </h1> :

            <div className="p-6">
              <h1 className="text-2xl mb-4">My Watchlist</h1>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {watchlistMovies.map((item) => <WatchlistItem key={item.id} entry={item} fetchWatchlist={fetchWatchlist} />)}
              </div>
            </div>
        }
    </>
  );
}

export default WatchlistPage;
