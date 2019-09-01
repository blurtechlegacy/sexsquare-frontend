import React from 'react';
import styles from './FeedMenu.module.scss';


const FeedMenu = () => {

    return (
        <div className={styles.menuContainer}>
          <ul className={styles.menu}>
            <li>Main</li>
            <li>Fucks</li>
            <li>People</li>
            <li>Tags</li>
            <li>About</li>
          </ul>
        </div>
    )
};

export default FeedMenu
