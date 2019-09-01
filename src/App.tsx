import React from 'react'
import './App.css'
import FeedMenu from './components/Feed/FeedMenu'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      <FeedMenu />
      <Feed />
    </div>
  )
}

export default App
