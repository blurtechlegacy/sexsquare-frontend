import React from 'react'
import nanoid from 'nanoid'
import AddSexNote from './AddSexNote'
import styles from './Feed.module.scss'

const mockData = [
  {
    nickname: 'MacOSO',
    partners: ['SeagullNina', 'MacOSO'],
  },
  {
    nickname: 'Vetka921',
    partners: ['Your mom', 'Vetka921'],
  },
  {
    nickname: 'MacOSO',
    partners: ['SeagullNina', 'MacOSO'],
  },
];
const punches = [
  ["beat the shit out of"],
  ["knocked n-times into","doors"],
  ["have sex with"]
];

const FeedMenu = () => {
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div className={styles.feedContainer}>
      <AddSexNote />
      <div className={styles.listContainer}>
        {mockData.map(i => {
          return (
            <div key={nanoid(8)} className={styles.sexNote}>
              {i.nickname}{' '}{punches[getRandomInt(0,punches.length)]}{' '}
              {i.partners.map((item, index) => (index ? ', ' : '') + item)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeedMenu
