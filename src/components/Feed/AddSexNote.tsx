import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import styles from './AddSexNote.module.scss'

const AddSexNote = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Add sex note</h1>
            <Input
                placeholder="Where have you had sex?"
                defaultValue=""
                className={styles.input}
                inputProps={{
                    'aria-label': 'description',
                }}
            />
            <div className={styles.buttons}>
            <FormControlLabel
                value="start"
                control={<Checkbox color="primary" />}
                label="Private"
                labelPlacement="start"
            />
            <Button variant="contained" color="primary" className={styles.button}>
                Send
                <Icon className={styles.rightIcon}>send</Icon>
            </Button>
            </div>
        </div>
    )
};

export default AddSexNote
