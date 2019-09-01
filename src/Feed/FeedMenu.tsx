import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import './feedStyles.scss';

console.log('ok');
const a = [0,1,2,3,4,5];

const FeedMenu = () => {

    return (
        <div className="listContainer">
          {a.map(i => {
            return <div className="sexNote"></div>
          })}

        </div>
    )
};

export default FeedMenu
