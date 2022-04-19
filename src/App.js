import React, { useState, useEffect } from 'react'
import {
  Grid,
} from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'
import { setContrast } from './store/slice/colourSlice'
import { setAutoScroll, setSmoothInput, setDifficulty } from './store/slice/settingSlice'

import Header from './components/Header'
import Game from './components/game/Game'
import Statistics from './components/statistic/Statistics'
import Settings from './components/setting/Settings'
import Tutorial from './components/tutorial/Tutorial'
import Dictionary from './components/dictionary/Dictionary'
import Difficulty from './components/difficulty/Difficulty'
import './App.css'

import record from './utils/record'
import setting from './utils/setting'
import display from './utils/display'

function App() {
  const dispatch = useDispatch()

  const [ currentDateNo, setCurrentDate ] = useState('')
  const [ played, setPlayed ] = useState(false)
  const [ openStatistic, setOpenStatistic ] = useState(false)
  const [ openSetting, setOpenSetting ] = useState(false)
  const [ openTutorial, setOpenTutorial ] = useState(false)
  const [ openDictionary, setOpenDictionary ] = useState(false)
  const [ openDifficulty, setOpenDifficulty ] = useState(false)

  useEffect(() => {
     // get the date here so that things will be consistant util refresh
    const date = record.date()
    setCurrentDate(date)

    const s = setting.load()
    if (s.contrast) {
      display.favicon(s.contrast)
      dispatch(setContrast({ value: s.contrast }))
    }
    if (s.autoscroll) {
      dispatch(setAutoScroll({ value: s.autoscroll }))
    }
    if (s.smoothinput) {
      dispatch(setSmoothInput({ value: s.smoothinput }))
    }
    if (s.difficulty) {
      dispatch(setDifficulty({ value: s.difficulty }))
    } else {
      setOpenDifficulty(true)
    }

    const hasHistory = record.history()
    if (hasHistory.length === 0) {
      setOpenTutorial(true)
    }
  }, [])

  useEffect(() => {
    if (played) {
      setOpenStatistic(true)
    }
  }, [played])

  return (
    <>
      <div className='App'>
        <div className='container'>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Header 
                openStatistic={() => setOpenStatistic(true)}
                openSetting={() => setOpenSetting(true)}
                openTutorial={() => setOpenTutorial(true)}
                openDictionary={() => setOpenDictionary(true)}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Game 
                date={currentDateNo}
                setFinished={() => setPlayed(true)}  
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <Statistics 
        date={currentDateNo}
        statechange={played}
        open={openStatistic}
        handleClose={() => setOpenStatistic(false)}
      />
      <Settings
        dateIndex={currentDateNo}
        open={openSetting}
        openDifficulty={() => setOpenDifficulty(true)}
        handleClose={() => setOpenSetting(false)}
      />
      <Tutorial
        open={openTutorial}
        handleClose={() => setOpenTutorial(false)}
      />
      <Dictionary
        open={openDictionary}
        handleClose={() => setOpenDictionary(false)}
      />
      <Difficulty
        open={openDifficulty}
        handleClose={() => setOpenDifficulty(false)}
      />
    </>
  );
}

export default App
