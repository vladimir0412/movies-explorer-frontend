import './MoviesCard.css';
import {useLocation} from 'react-router-dom';

function MoviesCard(props) {

  const location = useLocation();
  const duration = () => {
    const hours = Math.floor(props.duration/60);
    const minutes = props.duration % 60;
    return `${hours + 'ч'+ minutes +'м'}`
  }

  return (
    <div className="movies-card">
      <a href={props.trailerLink} target="blank" className="moviesCard__link">
        <img className="movies-card__image" src={props.image} alt={props.nameRU} />
      </a>
      <div className="movies-card__info">
        <div className="movies-card__items">
          <h2 className="movies-card__title">{props.nameRU}</h2>
          {(location.pathname === "/movies") ? (
            <button className={`${props.isSavedMovie(props.movie) ? "movies-card__add-button_active" : "movies-card__add-button"}`}
              type="submit" onClick={()=>props.handleAction (props.movie)}>
            </button>
          ) : (
            <button className="movies-card__close-button" type="submit" onClick={()=>props.deleteMovie(props.movie)}/>
          )}
        </div>
        <p className="movies-card__duration">{`${duration()}`}</p>
      </div>



    </div>
  );
}

export default MoviesCard;
