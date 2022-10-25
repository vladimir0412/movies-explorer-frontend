import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={props.image} alt={props.title} />
      <div className="movies-card__info">
        <div className="movies-card__items">
          <h2 className="movies-card__title">{props.title}</h2>
          <button className={props.className} type="button"></button>
        </div>
        <p className="movies-card__duration">{props.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
