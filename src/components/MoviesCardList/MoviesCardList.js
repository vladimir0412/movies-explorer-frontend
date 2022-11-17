import React, {useEffect, useState} from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({movieCards, className, isLoad, isSavedMovie, deleteMovie, handleAction}) {

  const [moviesOnDisplay, setMoviesDisplay] = useState(0);
  const display = window.innerWidth;

  function loadMovieCards() {
    if(display > 1000) {
      setMoviesDisplay(12);
    } else if (display > 700) {
      setMoviesDisplay(8);
    } else if (display < 700) {
      setMoviesDisplay(5);
    }
  }

  useEffect(() => {
    loadMovieCards()
  }, [])

  window.resize = function () {
    setTimeout(() => {
      loadMovieCards()
    }, 500 )
  }

  function loadMoreMoviesCards() {
    const CountOfMoviesPC = 3;
    const CountOfMoviesTablet = 2;
    if(display > 1000) {
      setMoviesDisplay (moviesOnDisplay + CountOfMoviesPC)
    } else if (display > 700) {
      setMoviesDisplay (moviesOnDisplay + CountOfMoviesTablet)
    } else if (display < 700) {
      setMoviesDisplay (moviesOnDisplay + CountOfMoviesTablet)
    }
  }

  return (
    <section className={"movie-cardlist" + (isLoad?" movie-cardlist_invisible": "")}>
      <div className="movie-cardlist__elements">
        {movieCards.slice(0, moviesOnDisplay).map((movie) => (
          <MoviesCard
            className={className}
            key={movie.movieId || movie.id}
            id={movie.id}
            country={movie.country}
            duration={movie.duration}
            description={movie.description}
            image={movie.image}
            trailerLink={movie.trailerLink}
            thumbnail={movie.thumbnail}
            movieId={movie.movieId}
            nameRU={movie.nameRU}
            movie={movie}
            isSavedMovie={isSavedMovie}
            deleteMovie={deleteMovie}
            handleAction={handleAction}>
          </MoviesCard>
        ))}
      </div>

      {(movieCards.length > moviesOnDisplay || movieCards.length <! 3) ? (
        <section className="movies__more">
          <button className="movies__more-button" type="button" onClick={() => loadMoreMoviesCards()}>Ещё</button>
        </section>
      ) : null}

    </section>
  );
}

export default MoviesCardList;
