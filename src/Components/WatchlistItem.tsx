function WatchlistItem() {
  return (
    <div className="bg-gray-800 p-2 rounded">
      <img src="https://via.placeholder.com/200" />
      <h3 className="mt-2">Movie Title</h3>
      <p className="text-gray-400">2023 • 7.8 IMDb • 120 min</p>
      <p className="text-gray-400">Director: John Doe</p>

      <div className="flex gap-2 mt-3">
        <button className="flex-1 bg-green-500 py-2 rounded hover:bg-green-600 text-sm">
          Mark Watched
        </button>

        <button className="flex-1 bg-red-500 py-2 rounded hover:bg-red-600 text-sm">
          Remove
        </button>
      </div>
    </div>
  );
}

export default WatchlistItem;
