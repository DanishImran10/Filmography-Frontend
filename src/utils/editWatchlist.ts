import axios from "axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthContext";

export function useAddToWatchlist(movieId: string, callback: React.Dispatch<React.SetStateAction<boolean>>) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return addToWatchlist;

  async function addToWatchlist() {
    if (!user)
      navigate("/login");

    callback(true);

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
        navigate("/login");

      callback(false);

      try {
        await axios.delete(`http://localhost:5000/api/watchlist/${movieId}`, {
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