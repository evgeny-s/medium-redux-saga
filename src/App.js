import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ArticleList from "./containers/ArticleList";

function App() {
  return (
    <div className="container">
      <h1>Medium</h1>
      <ArticleList />
    </div>
  );
}

export default App;
