import React, { useState } from 'react';
import { Route, Switch, Link, useHistory, useLocation, Redirect } from 'react-router-dom';
import './App.css';
import * as auth from '../../utils/Auth.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Register from '../Register/Register'
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App() {

  const history = useHistory();
  const location = useLocation();

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [movieCards, setMovieCards] = useState([]);
  const [currentUser,setCurrentUser] = useState("");
  const [registerError, setRegisterError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMoviesCard, setSavedMovieCards] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [messageOfSearch, setMessageOfSearch] = useState("");
  const [searchedSavedMoviesCard, setSearchedSavedMovieCards] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [message, setMessage] = useState("");

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if(loggedIn) {
      moviesApi.getMovies()
      .then((data) => {
        localStorage.setItem("movies", JSON.stringify(data));
        setMovies(JSON.parse(localStorage.getItem("movies")))
      })
      .catch((error)=>{
        console.log(error);
        setMessageOfSearch('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      getSavedMovies()
      if(localStorage.getItem("movieCards")) {
        moviesApi.getMovies()
        .then(() => {
          setMovieCards(JSON.parse(localStorage.getItem("movieCards")).map((movie) => ({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co/${movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN
          })));
        })
        .catch((error) => {
          console.log(error);
        })
      }
    }
  }, [loggedIn]);

  function tokenCheck() {
    if(localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      if(token) {
        getUser(token);
      }
    }
  }

  function getUser(token) {
    auth.getUser(token)
    .then((data) => {
      setLoggedIn(true);
      setCurrentUser(data);
      mainApi.getToken(token);
      history.push(location.pathname);
    })
    .catch((error) => {
      console.log(error)
    });
  }

  function editUser(data) {
    mainApi.editUser(data)
    .then((userStats) => {
      setCurrentUser(userStats);
      setMessage("Данные успешно обновлены")
    })
    .catch((error) => {
      console.log(error);
      setMessage("Ошибка при попытке обновить данные")
    })
  }

  function toRegister(data) {
    auth.register(data.email, data.password, data.name)
      .then((res) => {
        if(res) {
          toLogin(data);
        }
      }
    )
    .catch((error) => {
      console.log(error);
      setRegisterError(true);
    })
  }

  function toLogin(data) {
    auth.authorize(data.email, data.password)
      .then((data) => {
        if (data.token) {
          getUser(data.token);
        }
      }
    )
    .catch ((error) => {
      console.log(error);
    })
  }

  function getSavedMovies() {
    mainApi.getMovies()
    .then((data) => {
      setSavedMovieCards(data.map((savedMovie) => ({
        id: savedMovie._id,
        country: savedMovie.country,
        director: savedMovie.director,
        duration: savedMovie.duration,
        year: savedMovie.year,
        description: savedMovie.description,
        image: savedMovie.image,
        trailerLink: savedMovie.trailerLink,
        thumbnail: savedMovie.thumbnail,
        movieId: savedMovie.movieId,
        nameRU: savedMovie.nameRU,
        nameEN: savedMovie.nameEN,
      })))
    })
    .catch ((error) => {
      console.log(error);
    })
  }

  function searchMovie(text, movies) {
    const ShortTime = 40;
    const moviesFilter = movies.filter((item) => (item.nameRU.toLowerCase().includes(text.toLowerCase())) && (isShort===true ? item.duration <= ShortTime : ' '));
    if(location.pathname === "/movies") {
      setMessageOfSearch('')
      setIsLoad(true);
      setTimeout(() => {
        setIsLoad(false);
        if(moviesFilter.length === 0) {
          setMessageOfSearch("Ничего не найдено")
        } else {
          setMessageOfSearch("")
        }
        setMovieCards(
          moviesFilter.map((movie) => ({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co/${movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN
          }))
        )
      }, 2000)
    localStorage.setItem("movieCards", JSON.stringify(moviesFilter))
    } else {
      setIsSearched(true);
      if (moviesFilter.length === 0) {
        setMessageOfSearch("Ничего не найдено")
      } else {
        setMessageOfSearch("")
      }
      setSearchedSavedMovieCards(moviesFilter)
    }
  }

  function isSavedMovie(data) {
    const result = savedMoviesCard.some((item) => {
      if(item.movieId === data.movieId) {
        return item;
      }
    })
    return result
  }

  function handleAction(data) {
    if(isSavedMovie(data) === false) {
      saveMovies(data)
    } else {
      deleteSavedMovie(data)
    }
  }

  function saveMovies(data) {
    mainApi.createMovies(data)
    .then ((data) => {
      getSavedMovies([data, ...savedMoviesCard])
    })
    .catch ((error) => {
      console.log(error);
    })
  }

  function deleteSavedMovie(data) {
    savedMoviesCard.forEach((item) => {
      if (item.movieId === data.movieId) {
        deleteMovie(item);
      }
    })
  }

  function deleteMovie(data) {
    mainApi.deleteMovies(data, data.id)
    .then(() => {
      const result = savedMoviesCard.filter( item => item.id !== (data.id) );
      setSavedMovieCards(result);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('text')
    localStorage.removeItem('movies')
    localStorage.removeItem('movieCards')
    localStorage.removeItem('isShort')
    setMovieCards([]);
    setSearchedSavedMovieCards([]);
    setLoggedIn(false);
    history.push('/')
  }

  function onClose() {
    setIsNavigationOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page-container">
          <Header
            className="header header-main"
            loggedIn={loggedIn}
            isOpen={isNavigationOpen}
            onClose={onClose}
            onClick={setIsNavigationOpen}>
          </Header>
          <Switch>
            <Route exact path = '/'>
              <Main
                loggedIn = {loggedIn}
                isOpen = {isNavigationOpen}
                onClose = {onClose}
                onClick = {setIsNavigationOpen}/>
            </Route>
            <Route
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              isSavedMovie={isSavedMovie}
              movies={movies}
              isLoad={isLoad}
              onShort={setIsShort}
              isShort={isShort}
              handleAction={handleAction}
              message={messageOfSearch}
              movieCards={movieCards}
              isOpen={isNavigationOpen}
              onClose={onClose}
              onClick={setIsNavigationOpen}
              searchMovie={searchMovie} >
            </Route>
            <Route
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              isOpen={isNavigationOpen}
              onClose={onClose}
              deleteMovie={deleteMovie}
              searchMovie={searchMovie}
              onShort={setIsShort}
              isShort={isShort}
              isSearched={isSearched}
              onSearched={setIsSearched}
              message={messageOfSearch}
              onSetMessage={setMessageOfSearch}
              onClick={setIsNavigationOpen}
              movieCards={savedMoviesCard}
              getSavedMovies={getSavedMovies}
              searchedMovie={searchedSavedMoviesCard} >
            </Route>
            <Route
              path="/profile"
              loggedIn={loggedIn}
              logOut={logOut}
              editUser={editUser}
              message={message}
              onSetMessage={setMessage}
              component={Profile}
              isOpen={isNavigationOpen}
              onClose={onClose}
              onClick={setIsNavigationOpen} >
            </Route>
            
            <Route exact={true} path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
