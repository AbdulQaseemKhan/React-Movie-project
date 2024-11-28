import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdMovie } from "react-icons/md";
import { MdReport } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosPlay } from "react-icons/io";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 9 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 7 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
};

const TvShowDetail = () => {
    const { movieId } = useParams(); // Get movieId from the URL
    const [TvShow, setTvShow] = useState(null); // Movie details
    const [cast, setCast] = useState([]); // Movie cast
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        if (movieId) {
            fetchTvShowDetails(movieId);
            fetchTvShowCast(movieId);
        }
    }, [movieId]);

    // Fetch movie details
    const fetchTvShowDetails = async (id) => {
        const apiKey = "105b3449e54997efc78dbad890bf50dc";
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`);
        const data = await response.json();
        setTvShow(data);
        setLoading(false); // Set loading to false after fetching
    };

    // Fetch movie cast
    const fetchTvShowCast = async (id) => {
        const apiKey = "105b3449e54997efc78dbad890bf50dc";
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`);
        const data = await response.json();
        setCast(data.cast.slice(0, 10)); // Top 10 cast members
    };

    if (loading) {
        return <p className="text-center text-xl font-bold">Loading...</p>; // Display loading message
    }

    return (
        <>
            <div className="bg-black text-white">
                {/* Movie Details */}
                {TvShow && (
                    <>
                        <div className="w-full relative">
                            <img
                                src={
                                  TvShow.backdrop_path
                                        ? `https://image.tmdb.org/t/p/w1280${TvShow.backdrop_path}`
                                        : "https://via.placeholder.com/1280x720?text=No+Backdrop"
                                }
                                alt={`${TvShow.title} Backdrop`}
                                className="w-full brightness-50"
                                />
                            <div className="bg-black h-[162px] rotate-180 w-full absolute top-[75%]  shadow-xl shadow-black"></div>
                        </div>
                        <div className=" w-full flex flex-col md:flex-row items-center p-6 gap-6 absolute top-[44.5%]">
                            <img
                                src={
                                  TvShow.poster_path
                                        ? `https://image.tmdb.org/t/p/w1280${TvShow.poster_path}`
                                        : "https://via.placeholder.com/300x450?text=No+Poster"
                                }
                               
                                className="w-40 md:w-48 rounded-2xl border-2 border-black"
                            />
                            <div className="mt-3">
                                <h1 className="text-4xl font-bold font-serif mb-4 blur-md invert drop-shadow-xl md:filter-none shadow-black">{TvShow.original_name}</h1>
                               <p>
                                <strong className="text-xl">{TvShow.release_date}</strong>
                                <p className="mt-1 flex gap-2">{TvShow.vote_average}<IoStar className="mt-1 text-base"/> </p>
                               </p>
                            </div>
                       </div>
                        <div className="icons bg-black h-20 w-full flex items-center justify-center gap-44 font-serif "> 
                            <div className="flex flex-col items-center mt-2 cursor-pointer">                          
                            <FaRegHeart className="text-xl "/>
                            <strong> Favourite</strong>
                            </div>
                            <div className="flex flex-col items-center mt-2 cursor-pointer">
                            <MdMovie className="text-xl"/>
                            <strong>Trailer</strong>
                            </div>
                            <div className="flex flex-col items-center mt-2 cursor-pointer">
                            <MdReport className="text-xl"/>
                            <strong>Report</strong>
                            </div>
                            <div className="flex flex-col items-center mt-2 cursor-pointer">
                            <FaShareAlt className="text-xl"/>
                            <strong>Share</strong>
                            </div>
                            <div className="flex flex-col items-center mt-2 cursor-pointer">
                            <BsFillInfoCircleFill className="text-xl"/>
                            <strong>More Info</strong>
                            </div>
                         </div>
                         <div className="btn bg-black w-full h-20 flex  items-center justify-center">
                            <button className="bg-red-700 flex items-center justify-center w-3/4 h-11 rounded-full text-base gap-1 font-mono"> <IoIosPlay/> Play </button>
                         </div>
                         <div className="info h-[287px]  mx-6">
                            <div className="py-1">
                            <strong className="text-xl">Overview</strong>
                            <p className="text-sm">{TvShow.overview}</p>
                            </div>
                            {TvShow.genres && TvShow.genres.length > 0 && (
    <div className="py-1">
        <strong className="text-xl">Genres</strong>
        <p className="text-sm">
            {TvShow.genres.map((genres) => genres.name).join(" ")}
        </p>
    </div>
)} 
                            <div className="py-1">
                            <strong className="text-xl">Original Title</strong>
                            <p className="text-sm">{TvShow.original_name}</p>
                            </div>
                            {TvShow.spoken_languages && TvShow.spoken_languages.length > 0 && (
    <div className="py-1">
        <strong className="text-xl">Original Language</strong>
        <p className="text-sm">
            {TvShow.spoken_languages.map((languages) => languages.english_name).join(", ")}
        </p>
    </div>
)} 
                         </div>

                    </>
                )}

                {/* Movie Cast */}
                <div className="p   px-6">
                    <h2 className="text-2xl font-bold mb-4">Cast :</h2>
                    <Carousel responsive={responsive} className="bg--600">
                        {cast.map((actor) => (
                            <div
                                key={actor.id}
                                className="flex flex-col items-center text-center p-4"
                            >
                                <img
                                    src={
                                        actor.profile_path
                                            ? `https://image.tmdb.org/t/p/w1280${actor.profile_path}`
                                            : "https://via.placeholder.com/100x150?text=No+Image"
                                    }
                                    alt={actor.name}
                                    className="w-24 h-36 object-cover rounded mb-2"
                                />
                                <p className="text-sm font-bold">{actor.name}</p>
                                <p className="text-sm text-gray-400">{actor.character}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default TvShowDetail;
