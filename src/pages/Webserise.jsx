import React from 'react'
import { useNavigate } from "react-router-dom";

function Webserise() {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(`/${selectedValue}`);
    }
  };

  return (
    <>
    <section>
        <select
          onChange={handleChange}
          defaultValue="Webserise"
          className="text-lg font-bold font-serif bg-transparent"
        >
          <option value="Movie" className='font-bold font-serif'>Movies</option>
          <option value="Anime" className='font-bold font-serif'>Anime</option>
          <option value="Webserise" className='font-bold font-serif'>WebSerise</option>
        </select>
      </section>
    
    </>
  )
}

export default Webserise