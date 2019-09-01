import React from 'react';
import styles from './Tags.module.scss';
import nanoid from 'nanoid'

const tagList =[
  {label: 'Лесбийский', payload: 'lesbian'},
  {label: 'Гейский', payload: 'gay'},
  {label: 'С игрушками', payload: 'toys'},
  {label: 'Свинг', payload: 'swing'},
  {label: 'БДСМ', payload: 'bdsm'},
  {label: 'Групповой', payload: 'gangbang'}
];

const Tags = () => {

    return (
        <div className={styles.tagsContainer}>
          <div className={styles.list}>
            {tagList.map(i => {
              return (
                <p key={nanoid(8)} className={styles.tag} onClick={()=>console.log(i.payload)}>
                    {i.label}
                </p>
              )
            })}
          </div>
        </div>
    )
};

export default Tags
