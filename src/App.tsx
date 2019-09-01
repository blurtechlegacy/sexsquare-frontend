import React from 'react';
import './App.css';
import AddSexNote from "./Feed/AddSexNote";
import FeedMenu from "./Feed/FeedMenu"
import Header from "./Header/Header"

const App = () => {
  return (
    <div className="App">
        <Header />
        <AddSexNote />
        <FeedMenu />
    </div>
  );
}

export default App;
