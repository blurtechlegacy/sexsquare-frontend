import React from 'react'
import styles from './App.module.scss'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Feed from './components/Feed'
import Profile from './components/Profile'
import Places from './components/Places'
import About from './components/About'
import nanoid from 'nanoid'
import { getState } from './store'

const routes = [
  {
    path: '/',
    exact: true,
    label: () => (
      <Link key={nanoid(8)} to="/">
        Home
      </Link>
    ),
    main: () => <Feed />,
  },
  {
    path: '/profile/',
    label: () => (
      <Link key={nanoid(8)} to="/profile/">
        Profile
      </Link>
    ),
    main: () => <Profile />,
  },
  {
    path: '/places/',
    label: () => (
      <Link key={nanoid(8)} to="/places/">
        Places
      </Link>
    ),
    main: () => <Places />,
  },
  {
    path: '/about/',
    label: () => (
      <Link key={nanoid(8)} to="/about/">
        About
      </Link>
    ),
    main: () => <About />,
  },
]

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.appContainer}>
        <Router>
          <div className={styles.menuContainer}>
            <ul className={styles.menu}>{routes.map(item => item.label())}</ul>
          </div>
          {routes.map(route => (
            <Route
              key={nanoid(8)}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Router>
      </div>
    </div>
  )
}

export default App
