import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies() {
  return (
    <section>
      <SearchForm />
      <Preloader />
      <MoviesCardList className="movies-card__add-button" />
      <section className="movies__more">
        <button className="movies__more-button" type="button">Ещё</button>
      </section>
    </section>
  );
}

export default Movies;
