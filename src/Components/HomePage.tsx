import Navbar from "./Navbar";
import MoviePoster from "./MoviePoster";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl mb-4">Trending Movies</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
        </div>
      </div>
    </>
  );
}

export default HomePage;
