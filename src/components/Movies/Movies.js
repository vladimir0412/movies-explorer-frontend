import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies({ movieCards, movies, isLoad, onShort, isShort,
  isSavedMovie, searchMovie, message, handleAction }) {

  return (
    <section>
      <SearchForm
        searchMovie={searchMovie}
        movies={movies}
        onShort={onShort}
        isShort={isShort}
        movieCards={movieCards}
      />
      <Preloader
        isLoad={isLoad}
      />
      <p className="movies__massage">{message}</p>
      <MoviesCardList
        className="movies-card__add-button"
        movieCards={movieCards}
        isSavedMovie={isSavedMovie}
        isLoad={isLoad}
        handleAction={handleAction} >
      </MoviesCardList>
    </section>
  );
}



export default Movies;
