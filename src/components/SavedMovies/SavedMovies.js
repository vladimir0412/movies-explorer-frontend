import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <section>
      <SearchForm />
      <MoviesCardList className="movies-card__close-button" />
    </section>
  );
}

export default SavedMovies;
