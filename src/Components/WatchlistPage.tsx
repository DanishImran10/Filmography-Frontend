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

  async function fetchWatchlist() {
      const response = await axios.get("http://localhost:5000/api/watchlist", {
        withCredentials: true
      });
      setWatchlistMovies(response.data);
  }

  useEffect(() => {
    async function getWatchlist() {
      await fetchWatchlist();
    }

    getWatchlist();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h1 className="text-2xl mb-4">My Watchlist</h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {watchlistMovies.map((item) => <WatchlistItem key={item.id} entry={item} fetchWatchlist={fetchWatchlist} />)}
        </div>
      </div>
    </>
  );
}

export default WatchlistPage;
