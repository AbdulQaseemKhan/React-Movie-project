import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllMovies from "./pages/AllMovies";
import Contact from "./pages/Contact";
import PopularMoviesDetail from "./pages/PopularMoviesDetail";
import TrandingMovieDetail from "./pages/TrandingMovieDetail";
import AnimeDetail from "./pages/AnimeDetail";
import TvShowDetail from "./pages/TvShowDetail";  
import AllMedia from "./pages/AllMedia";
import Movie from "./pages/Movie";
import Anime from "./pages/Anime";
import AllMovieDetail from "./pages/AllMovieDetail";
import AllAnimeDetail from "./pages/AllAnimeDetail";
import AllTvShowDetail from "./pages/AllTvShowDetail";
import TvShow from "./pages/TvShow";






export default function App() {
  return (
   <>

   <Navbar/>
   <Routes>
    <Route path="/">
    <Route index element={<AllMovies/>}/>
    <Route path="/Detail/:movieId" element={<PopularMoviesDetail/>}/>
    <Route path="/TrandingMovieDetail/:movieId" element={<TrandingMovieDetail/>}/>
    <Route path="/AnimeDetail/:movieId" element={<AnimeDetail/>}/>
    <Route path="/All-Media" element={<AllMedia/>}/>
    <Route path="/TrandingTvShowDetail/:movieId" element={<TvShowDetail/>} />
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Movie" element={<Movie />} />
    <Route path="/Anime" element={<Anime />} />
   <Route path="/TvShow" element={<TvShow/>} />
   <Route path="/All-Movie-Detail/:movieId" element={<AllMovieDetail/>} />
   <Route path="/All-Anime-Detail/:AnimeId" element={<AllAnimeDetail/>} />
   <Route path="/All-TvShow-Detail/:TvShowId" element={<AllTvShowDetail/>} />

    </Route>
   </Routes>
 </>
  )
} 