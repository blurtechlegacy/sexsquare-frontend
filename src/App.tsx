import React from 'react'
import styles from './App.module.scss'
import FeedMenu from './components/Feed/FeedMenu'
import Feed from './components/Feed/Feed'
import TopPlaces from './components/Feed/TopPlaces'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.feedContainer}>
        <FeedMenu />
        <Feed />
        <TopPlaces />
      </div>
    </div>
  )
}

export default App
