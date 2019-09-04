import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import styles from './AddSexNote.module.scss'
import FormGroup from '@material-ui/core/FormGroup';
import Tags from './Tags';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

const AddSexNote = () => {
  const classes = useStyles();
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
          <Input
            placeholder="With which person or people you had sex?"
            defaultValue=""
            className={styles.input}
            inputProps={{
              'aria-label': 'description',
            }}
          />
          <Input
            placeholder="Note (there you can write which poses have been used, inf about place or everything what you want to remember)"
            defaultValue=""
            className={styles.input}
            inputProps={{
              'aria-label': 'description',
            }}
          />
          <FormGroup row>
            <h4>Mark the types of your sex:</h4>
              <FormControlLabel
                value="start"
                control={<Checkbox color="secondary" />}
                label="Vaginal"
                labelPlacement="start"
              />
            <FormControlLabel
              value="start"
              control={<Checkbox color="secondary" />}
              label="Oral"
              labelPlacement="start"
            />
            <FormControlLabel
              value="start"
              control={<Checkbox color="secondary" />}
              label="Anal"
              labelPlacement="start"
            />
            <FormControlLabel
              value="start"
              control={<Checkbox color="secondary" />}
              label="Petting"
              labelPlacement="start"
            />
          </FormGroup>
          <Tags/>
          <div className={classes.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Contraceptive methods</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <FormGroup row>
                  <FormControlLabel
                    value="start"
                    control={<Checkbox color="secondary" />}
                    label="Interrupted act"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="start"
                    control={<Checkbox color="secondary" />}
                    label="Condoms"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Pills"
                    control={<Checkbox color="secondary" />}
                    label="Anal"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="start"
                    control={<Checkbox color="secondary" />}
                    label="Other"
                    labelPlacement="start"
                  />
                </FormGroup>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
            <div className={styles.buttons}>
                <FormControlLabel
                  value="start"
                  control={<Checkbox color="primary"/>}
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
