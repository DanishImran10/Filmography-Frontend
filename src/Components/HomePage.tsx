import Navbar from "./Navbar";
import MoviePoster from "./MoviePoster";
import { useState, useEffect } from "react";
import axios from "axios";

export type Poster = {
  id: string,
  posterUrl: string
};

function HomePage() {
  const [trending, setTrending] = useState<Poster[]>([]);

  useEffect(() => {
    async function getTrendingMovies() {
      const response = await axios.get("http://localhost:5000/api/movies/trending");
      setTrending(response.data);
    }

    getTrendingMovies();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl mb-4">Trending Movies</h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {trending && trending.map((poster) => <MoviePoster key={poster.id} poster={poster} />)}
        </div>
      </div>
    </>
  );
}

export default HomePage;
