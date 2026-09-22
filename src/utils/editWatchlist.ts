import axios from "axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthContext";
import BASE_URL from "../BaseUrl";

export function useAddToWatchlist(movieId: string, callback: React.Dispatch<React.SetStateAction<boolean>>) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return addToWatchlist;

  async function addToWatchlist() {
    if (!user)
    {
      navigate("/login");
      return;
    }

    callback(true);

    try {
      await axios.post(`${BASE_URL}/api/watchlist`, {
        movieId
      }, {
        withCredentials: true
      });
    }
    catch (error) {
      if (axios.isAxiosError(error))
      {
        callback(false);
      }
    }
  }
}

export function useRemoveFromWatchlist(movieId: string, callback: React.Dispatch<React.SetStateAction<boolean>>) {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    return removeFromWatchlist;

    async function removeFromWatchlist() {
      if (!user)
      {
        navigate("/login");
        return;
      }

      callback(false);

      try {
        await axios.delete(`${BASE_URL}/api/watchlist/${movieId}`, {
          withCredentials: true
        });
      }
      catch (error) {
        if (axios.isAxiosError(error))
        {
          callback(false);
        }
      }
    }
}