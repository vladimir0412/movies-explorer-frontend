import React, {useState} from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Register from '../Register/Register'
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {

  const history = useHistory();

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    function onClose() {
        setIsNavigationOpen(false);
    }

  return (
    <div className="page">
      <div className="page-container">

          <Switch>
            <Route exact={true} path="/">
              <Header className="header header-main">
                <div className="header__signs">
                  <Link to="/signup" className="header__sign-link">Регистрация</Link>
                  <button className="header__sign-button" onClick= {() => history.push('./signin')} type="button">Войти</button>
                </div>
              </Header>
              <Main />
              <Footer />
            </Route>
            <Route  exact={true} path="/movies">
              <Header className="header">
                <Navigation
                  isOpen = {isNavigationOpen}
                  onClose = {onClose}/>
                <button className="navigation__burger" onClick={()=>setIsNavigationOpen(true)} type="button" />
              </Header>
                <Movies/>
                <Footer />
            </Route>
            <Route  exact={true} path="/saved-movies">
              <Header className="header">
                <Navigation
                  isOpen = {isNavigationOpen}
                  onClose = {onClose}/>
                <button className="navigation__burger" onClick={()=>setIsNavigationOpen(true)} type="button" />
              </Header>
                <SavedMovies />
                <Footer />
            </Route>
            <Route  exact={true} path="/profile">
              <Header className="header">
                <Navigation
                  isOpen = {isNavigationOpen}
                  onClose = {onClose}/>
                <button className="navigation__burger" onClick={()=>setIsNavigationOpen(true)} type="button" />
              </Header>
              <Profile />
            </Route>
            <Route  exact={true} path="/signup">
              <Register />
            </Route>
            <Route  exact={true} path="/signin">
              <Login />
            </Route>
            <Route exact={true} path="*">
              <NotFound />
            </Route>
          </Switch>

      </div>
    </div>
  );
}

export default App;
