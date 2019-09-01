import React from 'react'
import nanoid from 'nanoid'
import AddSexNote from './AddSexNote'
import styles from './Feed.module.scss'

const mockData = [
  {
    nickname: 'MacOSO',
    partners: ['SeagullNina'],
    timestamp: '',
  },
  {
    nickname: 'SeagullNina',
    partners: ['MacOSO'],
  },
  {
    nickname: 'Jane',
    partners: ['John', 'Bob', 'Eugene'],
  },
  {
    nickname: 'Bob',
    partners: ['Eugene', 'Jane'],
  },
  {
    nickname: 'John',
    partners: [],
  },
]

const punches = [
  ['beat the meat out of'],
  ['knocked n-times into'],
  ['had sex with'],
  ['']
];

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min

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
              <div className={styles.message}>
                {i.nickname}{' '}
                {i.partners.length > 0
                  ? `${
                      punches[getRandomInt(0, punches.length)]
                    } ${i.partners.map(
                      (item, index) => (index ? ' ' : '') + item
                    )}`
                  : 'free yourself'}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeedMenu
