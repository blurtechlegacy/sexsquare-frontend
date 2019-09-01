import React from 'react'
import styles from './TopPlaces.module.scss'
import nanoid from 'nanoid'

const tagList = [
  { label: 'Zaelcovskiy park', payload: 'park' },
  { label: 'Zoo', payload: 'zoo' },
  { label: 'Lenina square', payload: 'lenin' },
  { label: 'Children`s area', payload: 'childrens_area' },
  { label: 'School', payload: 'school' },
  { label: 'Train', payload: 'train' },
  { label: 'University', payload: 'university' },
  { label: 'Car', payload: 'car' },
  { label: 'Circus', payload: 'circus' },
]

const TopPlaces = () => {
  return (
    <div className={styles.tagsContainer}>
      <div className={styles.list}>
        <h2>Popular places nearby</h2>
        {tagList.map(i => {
          return (
            <p
              key={nanoid(8)}
              className={styles.tag}
              onClick={() => console.log(i.payload)}
            >
              {i.label}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default TopPlaces
