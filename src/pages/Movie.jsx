import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Movie() {
 const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(`/${selectedValue}`);
    }
  };

  const [AllMovie, setAllMovie] = useState([]);
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false);

  const API_KEY = "105b3449e54997efc78dbad890bf50dc";

  
  const fetchMovies = async (currentPage) => {
    setLoading(true); 
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&without_genres=16&include_video=false&page=${currentPage}`
      );
      const data = await response.json();
      setAllMovie((prevMovies) => [...prevMovies, ...data.results]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false); 
  };


  useEffect(() => {
    fetchMovies(page);
  }, [page]); 


  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return ( 
  <> 
  <div className="bg-black h-full w-full text-white pl-2">
        <section className="flex justify-between">
          <select
            onChange={handleChange}
            defaultValue="movies"
            className="text-lg font-bold font-serif bg-black text-white"
          >
            <option value="Movie" className="font-bold font-serif">
              Movies
            </option>
            <option value="Anime" className="font-bold font-serif">
              Anime
            </option>
            <option value="TvShow" className="font-bold font-serif">
            TvShow
            </option>
          </select>
          <div className="pt-2">
            <input
              type="search"
              className="h-11 w-72 mr-3 bg-transparent border-2 border-white border-dashed rounded-xl"
              placeholder="SEARCH"
            />
            <button className="bg-red-700 w-20 h-10 mr-2 font-bold text-black rounded-full text-sm hover:bg-transparent hover:text-white hover:border-2 hover:border-red-700">
              SEARCH
            </button>
          </div>
        </section>

        <div className="text-black h-full w-full flex flex-wrap gap-2 mt-5">
          {AllMovie.map((movie) => (
            <div className="ml-1" key={movie.id}>
              <div className="poster relative w-[268px] h-[380px] border-2 border-black rounded-md overflow-hidden flex flex-col items-center group">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full shadow-md"
                />
                <div className="overlay absolute bottom-0 left-0 w-full bg-white p-5 rounded-t-md transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-sm">{movie.title}</h3>
                    <span className="text-orange-500 font-bold text-lg">
                      {movie.vote_average}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm">Overview:</h3>
                  <p className="text-sm line-clamp-3 mb-4 font-semibold">
                    {movie.overview}
                  </p>
                  <Link to={`/All-Movie-Detail/${movie.id}`}>
                    <button className="h-10 w-24 font-bold text-sm mt-2 text-white bg-black rounded-full">
                      More Detail
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-5">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="bg-red-700 w-40 h-10 font-bold text-white rounded-full hover:bg-transparent hover:border-2 hover:border-red-700 hover:text-red-700"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
  </>



  )
}

export default Movie