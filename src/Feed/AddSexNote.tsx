import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
        },
        button: {
            margin: theme.spacing(1),
        },
        rightIcon: {
            marginLeft: theme.spacing(1),
        },
        title: {
            display: 'flex',
        },
        input: {
            margin: theme.spacing(1),
        },
    }),
);

const AddSexNote = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Add sex note</h1>
            <Input
                placeholder="Tell, where have you sex?"
                defaultValue=""
                className={classes.input}
                inputProps={{
                    'aria-label': 'description',
                }}
            />
            <FormControlLabel
                value="start"
                control={<Checkbox color="primary" />}
                label="Start"
                labelPlacement="start"
            />
            <Button variant="contained" color="primary" className={classes.button}>
                Send
                <Icon className={classes.rightIcon}>send</Icon>
            </Button>
        </div>
    )
};

export default AddSexNote
