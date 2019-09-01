import React from 'react';
import './App.css';
import FeedMenu from "./Feed/FeedMenu"
import Feed from "./Feed/Feed"
import Header from "./Header/Header"

const App = () => {
  return (
    <div className="App">
        <Header />
        <FeedMenu />
        <Feed />
    </div>
  );
}

export default App;
