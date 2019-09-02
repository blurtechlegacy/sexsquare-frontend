import React from 'react'
import nanoid from 'nanoid'
import AddSexNote from './AddSexNote'
import styles from './Feed.module.scss'
import moment from 'moment'

const mockData = [
  {
    nickname: 'MacOSO',
    partners: ['SeagullNina'],
    timestamp: '1567343304874',
    place: {
      center: {
        lnt: '',
        lng: '',
      },
      zoom: 0,
    },
  },
  {
    nickname: 'SeagullNina',
    partners: ['MacOSO'],
    timestamp: '1567340306874',
  },
  {
    nickname: 'Jane',
    partners: ['John', 'Bob', 'Eugene'],
    timestamp: '1567303204874',
  },
  {
    nickname: 'Bob',
    partners: ['Eugene', 'Jane'],
    timestamp: '1567043202874',
  },
  {
    nickname: 'John',
    partners: [],
    timestamp: '1565000004874',
  },
]

const punches = [
  'knocked n-times into',
  'had sex with',
  'investigated some holes of',
]

const punchesHand = ['free yourself', 'beated the meat out']

const dateFormat = (date: string) => moment(Number(date)).fromNow()

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min

const Feed = () => {
  return (
    <div className={styles.feedContainer}>
      <AddSexNote />
      <div className={styles.listContainer}>
        {mockData.map(i => {
          return (
            <div key={nanoid(8)} className={styles.sexNote}>
              <div className={styles.note}>
                <div className={styles.message}>
                  {i.nickname}{' '}
                  {i.partners.length > 0
                    ? `${
                        punches[getRandomInt(0, punches.length)]
                      } ${i.partners.map(
                        (item, index) => (index ? ' ' : '') + item
                      )}`
                    : punchesHand[getRandomInt(0, punches.length)]}
                </div>
                <div className={styles.timestamp}>
                  {dateFormat(i.timestamp)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Feed
