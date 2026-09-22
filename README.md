# Filmography - Frontend

A modern and responsive movie watchlist web application built using **React, TypeScript, and Tailwind CSS**. This frontend provides a smooth user experience for browsing movies, searching in real-time, managing a personal watchlist, and handling authentication via JWT-based session management.

---

## Features

* **Dynamic Movie Rendering**
  - Fetches paginated movie data from a backend API using `axios`.
  - Displays movies dynamically using reusable React components.

<img src="https://github.com/DanishImran10/Filmography-Frontend/blob/main/images/homepage.PNG" alt="Homepage" width="500">

---

* **Watchlist Management**
  - Add/remove movies from a personal watchlist.
  - Global synchronization of watchlist state across pages.

<img src="https://github.com/DanishImran10/Filmography-Frontend/blob/main/images/watchlist.PNG" alt="Watchlist" width="500">

---

* **Real-Time Search (Debounced)**
  - Live search as user types with debounced API calls.
  - Displays top results in an interactive dropdown.
  - “Show all results” redirects to full results page.

<img src="https://github.com/DanishImran10/Filmography-Frontend/blob/main/images/search.PNG" alt="Search Feature" width="500">

---

* **Authentication System**
  - JWT-based authentication using HTTP-only cookies.
  - Global authentication state handled via Context API.
  - Protected routes for authenticated users.
 
<img src="https://github.com/DanishImran10/Filmography-Frontend/blob/main/images/login.PNG" alt="Login Page" width="500">

---

* **Pagination & Filtering**
  - Server-side pagination for optimized performance.
  - URL-based query parameters for search + page navigation.

---

* **Client-Side Routing**
  - Built using `react-router`.
  - Dynamic routes for movie details (`/movie/:movieId`) and search results.

---

* **State Management**
  - React Context API for global auth state.
  - Local + derived state for watchlist handling.

---

* **Responsive UI**
  - Built with Tailwind CSS.
  - Mobile-first responsive grid layout.
  - Clean card-based movie UI.

<img src="https://github.com/DanishImran10/Filmography-Frontend/blob/main/images/movieDetails.PNG" alt="MovieDetails Page" width="500">

---

## How It Works

1. On load, the app fetches paginated movies from the backend.
2. User authentication status is validated via JWT cookie.
3. Users can:
   - Browse movies
   - Search movies in real-time
   - Add/remove movies from watchlist
   - View movie details
4. Search queries and pagination are reflected in the URL for shareable state.

---

## Technologies Used

* **React**
  - Functional components
  - Hooks (`useState`, `useEffect`, `useContext`, `useNavigate`, `useSearchParams`)

* **TypeScript**
  - Strong typing for components and API responses
  - Safer state and prop management

* **Tailwind CSS**
  - Utility-first styling
  - Responsive layouts and modern UI design

* **React Router**
  - Client-side routing
  - Dynamic route parameters

* **Axios**
  - REST API communication with backend
  - Cookie-based authentication support

---

## Implementation Highlights

* Debounced search to reduce API load
* Optimistic UI updates for watchlist actions
* Global auth state using Context API
* Reusable UI components (MovieTile, WatchlistItem, SearchBar, etc.)
* Server-driven pagination and filtering
* Clean separation of UI and API logic

---

## Deployed Application

Live Frontend: https://filmography-frontend.onrender.com

> Note: Backend may experience cold starts (~30–60 seconds on first request).

---

## Getting Started

```bash
npm install
npm run dev
