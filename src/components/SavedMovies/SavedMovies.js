import React, { useEffect} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isSearched, message, onSearched, onSetMessage, movieCards, deleteMovie,
  searchMovie, onShort, isShort, getSavedMovies, loggedIn, searchedMovie }) {

  let isSearch = isSearched;

  useEffect(() => {
    if(loggedIn) {
      onSearched(false);
      onSetMessage('')
      getSavedMovies()
    }
  }, [loggedIn])

  return (
    <section>
      <SearchForm
        searchMovie={searchMovie}
        movies={movieCards}
        onShort={onShort}
        isShort={isShort} />
      <p className="movies__massage">{message}</p>
      {(!isSearch) ? (<MoviesCardList movieCards={movieCards} deleteMovie={deleteMovie} />) :
        (<MoviesCardList movieCards={searchedMovie} deleteMovie={deleteMovie} />)}
    </section>
  );
}

export default SavedMovies;
