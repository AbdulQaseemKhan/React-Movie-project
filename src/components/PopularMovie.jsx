import React from 'react'
import { useEffect, useState} from "react"
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4    
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  


function PopulargMovie() {

    const [PopulargMovie, setPopulargMovie] = useState([]);


    useEffect(()=>{
      fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=105b3449e54997efc78dbad890bf50dc")
      .then(res => res.json())
      .then(data => setPopulargMovie(data.results));
    
    }, [])


  return (
    <>
      <Carousel responsive={responsive}>
          
          {
          PopulargMovie.map((movie) => (
          <div className=" flex items-center justify-center  ">
          <div className=" poster relative w-[268px] h-[380px] border-2 border-black rounded-md overflow-hidden flex flex-col items-center group ">
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className=" w-full h-full shadow-md"/>
        
        <div className=" overlay absolute bottom-0 left-0 w-full bg-white p-5 rounded-t-md transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-sm">{movie.title}</h3>
                        <span className="text-orange-500 font-bold text-lg">{movie.vote_average}</span>
                    </div>
                    <h3 className=" font-bold text-sm">Overview:</h3>
                    <p className="text-sm line-clamp-3 mb-4  font-semibold">{movie.overview}</p> 
                    <Link to={`/Detail/${movie.id}`} key={movie.id}>
                    <button className="h-10 w-24 font-bold text-sm mt-2 text-white bg-black rounded-full">More Detail</button>
                    </Link>
                    
      </div>
                </div> 
          
          </div>
          ))}
      
      
      </Carousel>;
    </>
  )
}

export default PopulargMovie