import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <input className="search-form__input" type="text" placeholder="Фильм" name="search" required></input>
        <button className="search-form__button" type="submit"></button>
      </form>
      <FilterCheckBox />
      <div className="search-form__line"></div>
    </section>
  );
}

export default SearchForm;
