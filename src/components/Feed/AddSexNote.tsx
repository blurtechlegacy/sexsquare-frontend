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

const Safety = () => {
  return (
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
  )
};

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
          <Input
            placeholder="With which person or people you had sex?"
            defaultValue=""
            className={styles.input}
            inputProps={{
              'aria-label': 'description',
            }}
          />
          <Input
            placeholder="Note (poses, inf about place and etc)"
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
          <div className={styles.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.heading}>Contraceptive methods</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                Safety();
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
