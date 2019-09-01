import React from 'react';
import './App.css';
import AddSexNote from "./Feed/AddSexNote";
import FeedMenu from "./Feed/FeedMenu"

const App = () => {
  return (
    <div className="App">
        <FeedMenu />
        <AddSexNote />
    </div>
  );
}

export default App;
