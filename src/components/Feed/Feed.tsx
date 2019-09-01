import React from 'react'
import nanoid from 'nanoid'
import AddSexNote from './AddSexNote'
import styles from './Feed.module.scss'

const mockData = [
  {
    nickname: 'MacOSO',
    partners: ['SeagullNina', 'MacOSO'],
  },
];

const FeedMenu = () => {
  return (
    <div className={styles.feedContainer}>
      <AddSexNote />
      <div className={styles.listContainer}>
        {mockData.map(i => {
          return (
            <div key={nanoid(8)} className={styles.sexNote}>
              {i.nickname} have sex with{' '}
              {i.partners.map((item, index) => (index ? ', ' : '') + item)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeedMenu
