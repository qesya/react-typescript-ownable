import React from 'react';
import AppHeader from './components/header';
import Footer from './components/footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/home';
import NotFound from './components/notFound';
import FavoritePage from './components/favorite';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <AppHeader />
      <div className='page-container'>
        <Switch>
          <Route
            exact
            path="/"
            component={HomePage} 
          />
          <Route
            exact
            path="/favorites"
            component={FavoritePage} 
          />
          <Route
            exact
            path="/**"
            component={NotFound} 
          />
        </Switch>
      </div>
    <Footer />
    </Router>
  );
}

export default App;
