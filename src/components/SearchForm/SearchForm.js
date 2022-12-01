import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ searchMovie, movies, onShort, isShort }) {

  const [newValue, setNewValue] = useState(localStorage.getItem('text') || '');
  const location = useLocation();
  const { register, handleSubmit } = useForm({ mode: 'onBlur' });

  function onSubmit(data) {
    searchMovie(data.text, movies)
    if(location.pathname === "/movies") {
      localStorage.setItem('text', data.text)
    }
  }

  const checkKeydown = (e) => {
    if(e.code === "Enter") {
      e.preventDefault();
    }
  };

  function handleChangeValue (e) {
    setNewValue(e.target.value);
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(e) => checkKeydown(e)} noValidate>
        <input className="search-form__input" type="text" placeholder="Фильм" name="search"
          {...register("text", {required: "Введите для поиска", value: location.pathname === "/movies"? newValue : ""})}
          onChange={(e) => handleChangeValue(e)}></input>
        <button className="search-form__button" type="submit"></button>
      </form>
      <FilterCheckBox
        movies={movies}
        isShort={isShort}
        text={newValue}
        onShort={onShort}
        searchMovie={searchMovie} />
      <div className="search-form__line"></div>
    </section>
  );
}

export default SearchForm;
