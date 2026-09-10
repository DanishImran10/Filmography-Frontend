import Navbar from "./Navbar";
import WatchlistItem from "./WatchlistItem";

function WatchlistPage() {
  return (
    <>
      <Navbar />

      <div className="p-6">
        <h1 className="text-2xl mb-4">My Watchlist</h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <WatchlistItem />
          <WatchlistItem />
          <WatchlistItem />
          <WatchlistItem />
          <WatchlistItem />
          <WatchlistItem />
        </div>
      </div>
    </>
  );
}

export default WatchlistPage;
