import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllMovies from "./pages/AllMovies";
import Contact from "./pages/Contact";
import PopularMoviesDetail from "./pages/PopularMoviesDetail";
import TrandingMovieDetail from "./pages/TrandingMovieDetail";
import AnimeDetail from "./pages/AnimeDetail";
import TvShowDetail from "./pages/TvShowDetail";

// import MovieApp from "./pages/MovieApp";



export default function App() {
  return (
   <>

   {/* <Navbar/> */}
   <Routes>
    <Route path="/">
    <Route index element={<AllMovies/>}/>
    {/* <Route index element={<MovieApp/>}/> */}
    <Route path="/Detail/:movieId" element={<PopularMoviesDetail/>}/>
    <Route path="/TrandingMovieDetail/:movieId" element={<TrandingMovieDetail/>}/>
    <Route path="/AnimeDetail/:movieId" element={<AnimeDetail/>}/>
    <Route path="/TrandingTvShowDetail/:movieId" element={<TvShowDetail/>} />
    <Route path="/Contact" element={<Contact/>}/>
    </Route>
   </Routes>
 </>
  )
} 