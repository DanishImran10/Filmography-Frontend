import axios from "axios";
import { useNavigate } from "react-router";

export function useAddToWatchlist(movieId: string, callback: React.Dispatch<React.SetStateAction<boolean>>) {
  const navigate = useNavigate();
  return addToWatchlist;

  async function addToWatchlist() {
    try {
      await axios.post("http://localhost:5000/api/watchlist", {
        movieId
      }, {
        withCredentials: true
      });
    }
    catch (error) {
      if (axios.isAxiosError(error))
      {
        if (error.response?.status === 404)
          navigate("/login");
      }
    }

    callback(true);
  }
}

export function useRemoveFromWatchlist(movieId: string, callback: React.Dispatch<React.SetStateAction<boolean>>) {
    const navigate = useNavigate();
    return removeFromWatchlist;

    async function removeFromWatchlist() {
      try {
        await axios.delete(`http://localhost:5000/api/watchlist/${movieId}`, {
        withCredentials: true
        });
      }
      catch (error) {
        if (axios.isAxiosError(error))
        {
          if (error.response?.status === 404)
            navigate("/login");
        }
      }

      callback(false);
    }
}