import React from 'react';
import nanoid from 'nanoid';
import './feedStyles.scss';

console.log('ok');
const a = [0,1,2,3,4,5];

const FeedMenu = () => {

    return (
        <div className="listContainer">
          {a.map(i => {
            return <div key={nanoid(8)} className="sexNote">{i}</div>
          })}

        </div>
    )
};

export default FeedMenu
