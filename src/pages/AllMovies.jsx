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
  <div className="bg-black" >
  <div >
    <Carousel 
    showThumbs={false}
    autoPlay={true}
    transitionTime={1}
    infiniteLoop={true}
    // showStatus={false}
    >
        {
          PopularMovie.map((movie) => (
            <Link to={`/Detail/${movie.id}`} key={movie.id}>
            <div  className=" relative -z-30 h-3/6">
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
            </div>
            <div className="h-4/6 absolute z-40 flex flex-col gap-6 justify-center text-start ml-14   ">
              <h1 className="text-5xl font-bold text-white">{movie.title}</h1>
              <div className="flex gap-10">
                <h3 className="text-3xl text-white">{movie.release_date}</h3>
                <span className="text-3xl text-white flex items-center">
                  {movie.vote_average}
                  <IoStar className="text-xl ml-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
   </Carousel>
   </div>

   <div className="text-5xl font-bold text-yellow-400 bg-gray-800 my-7 pl-14">
    <h1 className="py-3">POPULAR</h1>
   </div>

<div className=" h-full w-full grid grid-cols-4 grid-rows-5  gap-3 px-3 py-3  ">
   {
    PopularMovie.map((movie) => (
      
   <div className=" poster relative w-[268px] h-[380px] border-2 border-black rounded-md overflow-hidden flex flex-col items-center group ">
    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className=" w-full h-full shadow-md"/>
    <div className=" overlay absolute bottom-0 left-0 w-full bg-white p-5 rounded-t-md transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-base">{movie.title}</h3>
                    <span className="text-orange-500 font-bold text-lg">{movie.vote_average}</span>
                 </div>
                <h3 className=" font-bold text-sm">Overview:</h3>
                <p className="text-sm line-clamp-3 mb-4  font-semibold">{movie.overview}</p>
                <Link to={`/Detail/${movie.id}`} key={movie.id}>
                <button className="h-10 w-24 font-bold text-sm mt-2 text-white bg-black rounded-full">More Detail</button>
                </Link>

            </div>
           
    </div>

   
   ))}
       </div>

   </div>
   </>
  



  )
}

export default AllMovies