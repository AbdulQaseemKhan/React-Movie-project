import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MoviesDetail from "./pages/MoviesDetail";
import AllMovies from "./pages/AllMovies";
import Contact from "./pages/Contact";

// import MovieApp from "./pages/MovieApp";



export default function App() {
  return (
   <>

   {/* <Navbar/> */}
   <Routes>
    <Route path="/">
    <Route index element={<AllMovies/>}/>
    {/* <Route index element={<MovieApp/>}/> */}
    <Route path="/Detail/:id" element={<MoviesDetail/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    </Route>
   </Routes>
 </>
  )
} 