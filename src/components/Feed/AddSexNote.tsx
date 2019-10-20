import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Icon from '@material-ui/core/Icon'
import styles from './AddSexNote.module.scss'
import FormGroup from '@material-ui/core/FormGroup'
import Tags from './Tags'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import moment from 'moment'
import { INote } from '../models/IFeed'

interface IProps {
  add: (item: INote) => void
}

const safety = () => {
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
        label="Pills"
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
}

const AddSexNote = ({ add }: IProps) => {
  const [note, setNote] = React.useState<INote | undefined>(undefined)
  const [sexNote, setSexNote] = React.useState<string | undefined>(undefined)
  const [place, setPlace] = React.useState<string | undefined>(undefined)
  const [partners, setPartners] = React.useState<string>('')
  const [types, setTypes] = React.useState<string[]>([])
  const [tags, setTags] = React.useState<string[] | undefined>(undefined)
  const [contraceptive, setContraceptive] = React.useState<string[]>([])
  const [privateFlag, setPrivateFlag] = React.useState<boolean>(false)
  React.useEffect(() => {
    note && add(note)
  }, [note, add])

  const removeType = (value: string) => {
    types.splice(types.indexOf(value),1);
    setTypes([...types])
  }

  const removeContraceptive = (value: string) => {
    contraceptive.splice(contraceptive.indexOf(value),1);
    setContraceptive([...contraceptive])
  }

  const safety = () => {
    return (
      <FormGroup row>
        <FormControlLabel
          value="interrupted act"
          control={<Checkbox
            onChange={item => {
              return item.target.checked ? setContraceptive([...contraceptive, item.target.value]) : removeContraceptive(item.target.value)}}
            color="secondary"  />}
          label="Interrupted act"
          labelPlacement="start"
        />
        <FormControlLabel
          value="condoms"
          control={<Checkbox
            onChange={item => {
              return item.target.checked ? setContraceptive([...contraceptive, item.target.value]) : removeContraceptive(item.target.value)}}
            color="secondary" />}
          label="Condoms"
          labelPlacement="start"
        />
        <FormControlLabel
          value="anal"
          control={<Checkbox
            onChange={item => {
              return item.target.checked ? setContraceptive([...contraceptive, item.target.value]) : removeContraceptive(item.target.value)}}
            color="secondary" />}
          label="Anal"
          labelPlacement="start"
        />
        <FormControlLabel
          value="other"
          control={<Checkbox
            onChange={item => {
              return item.target.checked ? setContraceptive([...contraceptive, item.target.value]) : removeContraceptive(item.target.value)}}
            color="secondary" />}
          label="Other"
          labelPlacement="start"
        />
      </FormGroup>
    )
  }

  const tagSelector = (items: any) => {
      const tags = items ? items.map((item: any) => item.value) : []
      setTags(tags)
  }

  return (
    <div className={styles.container}>
      <Input
        placeholder="Where have you had sex?"
        defaultValue=""
        className={styles.input}
        inputProps={{
          'aria-label': 'description',
        }}
        onChange={item => setPlace(item.target.value)}
      />
      {place && (
        <Input
          placeholder="With which person or people you had sex?"
          defaultValue=""
          className={styles.input}
          inputProps={{
            'aria-label': 'description',
          }}
          onChange={item => setPartners(item.target.value)}
        />
      )}
      {partners && place && (
        <>
          <Input
            placeholder="Note (poses, inf about place and etc)"
            defaultValue=""
            className={styles.input}
            inputProps={{
              'aria-label': 'description',
            }}
            onChange={item => setSexNote(item.target.value)}
          />
          <FormGroup row>
            <h4>Mark the types of your sex:</h4>
            <FormControlLabel
              value="vaginal"
              control={<Checkbox
                onChange={item => {
                  return item.target.checked ? setTypes([...types, item.target.value]) : removeType(item.target.value)
                }
                }
                color="secondary" />}
              label="Vaginal"
              labelPlacement="start"
            />
            <FormControlLabel
              value="oral"
              control={<Checkbox
                onChange={item =>
                  item.target.checked? setTypes([...types, item.target.value]) : removeType(item.target.value)}
                color="secondary" />}
              label="Oral"
              labelPlacement="start"
            />
            <FormControlLabel
              value="anal"
              control={<Checkbox
                onChange={item =>
                  item.target.checked? setTypes([...types, item.target.value]) : removeType(item.target.value)}
                color="secondary" />}
              label="Anal"
              labelPlacement="start"
            />
            <FormControlLabel
              value="petting"
              control={<Checkbox
                onChange={item =>
                  item.target.checked? setTypes([...types, item.target.value]) : removeType(item.target.value)}
                color="secondary" />}
              label="Petting"
              labelPlacement="start"
            />
          </FormGroup>
          <Tags onChange={tagSelector} />
          <div className={styles.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.heading}>
                  Contraceptive methods
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>{safety()}</ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </>
      )}
      <div className={styles.buttons}>
        <FormControlLabel
          value="start"
          control={
            <Checkbox
              color="primary"
              onChange={item => setPrivateFlag(item.target.checked)}
            />
          }
          label="Private"
          labelPlacement="start"
        />
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => {
              console.log({
                  partners: partners.split(','),
                  nickname: 'MacOSO',
                  timestamp: String(moment().unix() * 1000),
                  place: {
                      center: {
                          lat: 54.986932,
                          lng: 82.925015,
                      },
                      zoom: 14,
                  },
                  private: privateFlag,
                  notes: sexNote,
                  contraceptive: contraceptive,
                  types: types,
                  tags: tags,
              })
            setNote({
              partners: partners.split(','),
              nickname: 'MacOSO',
              timestamp: String(moment().unix() * 1000),
              place: {
                center: {
                  lat: 54.986932,
                  lng: 82.925015,
                },
                zoom: 14,
              },
              private: privateFlag,
              notes: sexNote,
              contraceptive: contraceptive,
              types: types,
              tags: tags,
            })
          }}
        >
          Send
          <Icon className={styles.rightIcon}>send</Icon>
        </Button>
      </div>
    </div>
  )
}

export default AddSexNote
