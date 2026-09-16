import { Routes, Route } from "react-router";
import HomePage from "./Components/HomePage";
import MoviesPage from "./Components/MoviesPage";
import MovieDetailsPage from "./Components/MovieDetailsPage";
import WatchlistPage from "./Components/WatchlistPage";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignupPage";
import { useEffect, useContext } from "react";
import getAuth from "./utils/getAuth.ts";
import { AuthProvider } from "./Components/AuthProvider";
import { AuthContext } from "./Components/AuthContext";

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    async function loadCurrentUser() {
      const userId = await getAuth();
      setUser(userId);
    }

    loadCurrentUser();
  }, [setUser]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
        <Route path="/watchlist/:userId" element={<WatchlistPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
