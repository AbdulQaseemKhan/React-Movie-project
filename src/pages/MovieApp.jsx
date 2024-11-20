// import React, { useState, useEffect } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import { Link } from "react-router-dom";
// import { IoStar } from "react-icons/io5";
// import MoviesDetail from "./MoviesDetail";

// function MovieApp() {
//     const [movies, setMovies] = useState([]); // State for movie list
//     const [searchTerm, setSearchTerm] = useState(''); // State for search term
//     const [isSearching, setIsSearching] = useState(false); // State to handle emptying div
  
//     // Fetch popular movies when the component loads
//     useEffect(() => {
//       fetchPopularMovies();
//     }, []);
  
//     const fetchPopularMovies = async () => {
//       try {
//         const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=105b3449e54997efc78dbad890bf50dc'); // Replace with your API URL
//         const data = await response.json();
//         setMovies(data.results); // Assuming API response has a "results" array
//       } catch (error) {
//         console.error('Error fetching popular movies:', error);
//       }
//     };
  
//     const searchMovies = async () => {
//       if (!searchTerm.trim()) return; // Avoid empty search
  
//       try {
//         setIsSearching(true); // Clear the div while searching
//         const response = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=105b3449e54997efc78dbad890bf50dc&query=${searchTerm}`); // Replace with your search API URL
//         const data = await response.json();
//         setMovies(data.results || []); // Update with search results
//         setIsSearching(false); // Show results after fetching
//       } catch (error) {
//         console.error('Error searching movies:', error);
//         setIsSearching(false);
//       }
//     };
  
//     return (
//       <>
// <div className='bg-black'>
// <div className='flex bg-slate-800 justify-between mb-3'>  
//   <h1 className='text-4xl font-bold py-2'>All Movies</h1>
//         {/* Search Box */}
//         <div className='flex h-8 my-3'>
//         <input className='border-2 border-white bg-transparent '
//           type="search"
//           placeholder="Search for a movie..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={searchMovies}>Search</button>
//         </div>
// </div>

//         {/* Movie List */}
//         <div id="movie-container" className='h-full w-full grid grid-cols-4 grid-rows-5  gap-3 px-3 py-3 '>
//           {isSearching ? (
//             <p>Loading...</p> // Show a loading indicator
//           ) : movies.length > 0 ? (
//             movies.map((movie) => (
//           <div className=" poster relative w-[268px] h-[380px] border-2 border-black rounded-md overflow-hidden flex flex-col items-center group ">
//              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className=" w-full h-full shadow-md"/>               
//             <div className=" overlay absolute bottom-0 left-0 w-full bg-white p-5 rounded-t-md transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
//         <div className="flex justify-between items-center mb-3">
//                <h3 className="font-bold text-base">{movie.title}</h3>
//                <span className="text-orange-500 font-bold text-lg">{movie.vote_average}</span>
//                </div>
//               <h3 className=" font-bold text-sm">Overview:</h3>
//               <p className="text-sm line-clamp-3 mb-4  font-semibold">{movie.overview}</p>
//          <Link to={`/Detail/${movie.id}`} key={movie.id}>
//               <button className="h-10 w-24 font-bold text-sm mt-2 text-white bg-black rounded-full">More Detail</button>
//         </Link>
              
//     </div>
                         
//   </div>
             

//             ))
//           ) : (
//             <p>No movies found.</p> // Show this if no results
//           )}
//         </div>
//       </div>
//       </>
//     );
//   }
// export default MovieApp


{/* <Link to={`/Detail/${movie.id}`} key={movie.id}>
<div className=" poster relative w-[268px] h-[380px] border-2 border-black rounded-md overflow-hidden flex flex-col items-center group ">
 <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className=" w-full h-full shadow-md"/>
 <div className=" overlay absolute bottom-0 left-0 w-full bg-white p-5 rounded-t-md transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
             <div className="flex justify-between items-center mb-3">
                 <h3 className="font-bold text-base">{movie.title}</h3>
                 <span className="text-orange-500 font-bold text-lg">{movie.vote_average}</span>
              </div>
             <h3 className=" font-bold text-sm">Overview:</h3>
             <p className="text-sm line-clamp-3 mb-4  font-semibold">{movie.overview}</p> 
             

         </div> 
 </div>

</Link> */}