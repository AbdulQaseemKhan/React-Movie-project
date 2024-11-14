import { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import MoviesDetail from "./MoviesDetail";

const AllMovies = () =>{

  const [PopularMovie, setPopularMovie] = useState([])

useEffect(()=>{
  fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=105b3449e54997efc78dbad890bf50dc")
  .then(res => res.json())
  .then(data => setPopularMovie(data.results))

}, [])




  return(
  <>
  <div className="bg-black">
    <Carousel 
    showThumbs={false}
    autoPlay={true}
    transitionTime={1}
    infiniteLoop={true}
    showStatus={false}
    >
        {
          PopularMovie.map((movie) => (
            <Link to={`/Detail/${movie.id}`} key={movie.id}>
            <div  className=" relative -z-30 h-3/6">
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className=""/>
            </div>
            <div className="h-3/6 absolute z-40 flex flex-col gap-6 justify-center text-start ml-14   ">
              <h1 className="text-5xl font-bold text-white">{movie.title}</h1>
              <div className="flex gap-10">
                <h3 className="text-3xl text-white">{movie.release_date}</h3>
                <span className="text-3xl text-white flex items-center">
                  {movie.vote_average}
                  <IoStar className="text-xl ml-1" />
                </span>
              </div>
              <div className="text-sm font-sans text-white mt-2 w-3/5" >
                <p>{movie.overview}</p>
              </div>
            </div>
          </Link>
        ))}
   </Carousel>
   </div>
   </>
  



  )
}

export default AllMovies