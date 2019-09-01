import React from 'react';
import nanoid from "nanoid";
import AddSexNote from "./AddSexNote";
import styles from './Feed.module.scss';

const a = [0,1,2,3,4,5];

const FeedMenu = () => {

    return (
      <div className={styles.feedContainer}>
        <AddSexNote />
        <div className={styles.listContainer}>
          {a.map(i => {
            return <div key={nanoid(8)} className={styles.sexNote}>{i}</div>
          })}
        </div>
      </div>
    )
};

export default FeedMenu
