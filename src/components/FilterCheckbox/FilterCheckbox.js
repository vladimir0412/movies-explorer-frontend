import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';

function FilterCheckbox({ onShort, searchMovie, isShort, movies, text }) {

  const [isClicked, setIsClicked]= useState(false);
  const location = useLocation();

  function handleChangeTumbler() {
    onShort(!isShort)
    setIsClicked(true);
    if(location.pathname === "/movies") {
      localStorage.setItem('isShort', !isShort);
    }
  }

  useEffect(() => {
    if(location.pathname === "/movies") {
      console.log(localStorage.getItem('isShort'))
      if (localStorage.getItem('isShort')) {
        onShort(JSON.parse(localStorage.getItem('isShort')));
      }
    }
    if(location.pathname === "/saved_movies"){
      onShort(false);
    }
  }, [location]);

  useEffect(() => {
    if(isClicked === true) {
      searchMovie(text, movies)
    }
  }, [isShort, isClicked]);

  return(
    <section className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox"
        checked={isShort} onChange = {() => handleChangeTumbler()}/>
      <p className="filter-checkbox__genre">Короткометражки</p>
    </section>
  )
}

export default FilterCheckbox;
