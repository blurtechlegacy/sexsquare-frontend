import React from 'react'
import styles from './App.module.scss'
import FeedMenu from './components/Feed/FeedMenu'
import Feed from './components/Feed/Feed'
import Tags from './components/Feed/Tags'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.feedContainer}>
        <FeedMenu />
        <Feed />
        <Tags />
      </div>
    </div>
  )
}

export default App
