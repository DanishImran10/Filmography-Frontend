import Navbar from "./Navbar";
import MovieTile from "./MovieTile";

function MoviesPage() {
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
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center space-x-2">
          <button className="px-3 py-1 bg-gray-700 rounded hover:bg-blue-600 cursor-pointer">Prev</button>
          <button className="px-3 py-1 bg-gray-700 rounded hover:bg-blue-600 cursor-pointer">Next</button>
        </div>
      </div>
    </>
  );
}

export default MoviesPage;
