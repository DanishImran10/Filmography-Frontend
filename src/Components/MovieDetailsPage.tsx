import Navbar from "./Navbar";

function MovieDetailsPage() {
  return (
    <>
      <Navbar />

      <div className="px-25">
        <div className="p-6 flex justify-between mt-12">
          <div className="w-100 space-y-2">
            <h1 className="text-3xl font-bold">Movie Name</h1>
            <p className="text-gray-400">2023 • 120 min</p>
            <p className="text-gray-400">IMDb: 7.8 | Rotten Tomatoes: 85%</p>
            <p className="text-gray-400">Genre: Action, Drama</p>

            <p className="mt-4 text-gray-300">
              Full plot description goes here...
            </p>

            <p className="text-gray-400 mt-2">Director: John Doe</p>
            <p className="text-gray-400">Writer: Jane Smith</p>
            <p className="text-gray-400">Cast: Actor A, Actor B</p>

            <button className="bg-green-500 px-5 py-3 mt-5 rounded hover:bg-green-600 cursor-pointer">
              Add to Watchlist
            </button>
          </div>

          <div className="h-65">
            <img src="poster.jpg" className="rounded w-full" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10 items-center">
          <img src="poster.jpg" className="rounded w-full" />
          <img src="poster.jpg" className="rounded w-full" />
          <img src="poster.jpg" className="rounded w-full" />
          <img src="poster.jpg" className="rounded w-full" />
        </div>
      </div>
    </>
  );
}

export default MovieDetailsPage;
