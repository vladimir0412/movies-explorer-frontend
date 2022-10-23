import MoviesCard from '../MoviesCard/MoviesCard';
import movieImage from '../../images/movie-image.svg';
import './MoviesCardList.css';

const movies = [
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
  {
    title: '33 слова о дизайне',
    image: movieImage,
    duration: '1ч42м'
  },
];

function MoviesCardList(props) {
  return (
    <section className="movie-cardlist">
      <div className="movie-cardlist__elements">
        {movies.map((movie) => (
          <MoviesCard
            image={movie.image}
            title={movie.title}
            duration={movie.duration}
            className={props.className}>
          </MoviesCard>
        ))}
      </div>
    </section>
  );
}

export default MoviesCardList;
