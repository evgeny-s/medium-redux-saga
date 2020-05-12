import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import ArticleList from "./containers/ArticleList";
import ArticleEdit from "./containers/ArticleEdit";

function App() {
  function renderNavigation() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Medium</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className='nav-link' activeClassName='active' to="/" exact>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' activeClassName='active' to="/articles">Articles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' activeClassName='active' to="/create-article">Create Article</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <div className="container">
      {renderNavigation()}
      <Switch>
        <Route path="/" exact>
          <h3>Welcome to Medium!</h3>
        </Route>
        <Route path="/articles">
          <ArticleList />
        </Route>
        <Route path="/create-article">
          <ArticleEdit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
