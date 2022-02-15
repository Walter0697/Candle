import React, { useState, useEffect } from 'react'
import {
  Grid,
} from '@mui/material'

import { useDispatch } from 'react-redux'
import { setContrast } from './store/slice/colourSlice'
import { setAutoScroll } from './store/slice/settingSlice'

import Header from './components/Header'
import Game from './components/game/Game'
import Statistics from './components/statistic/Statistics'
import Settings from './components/setting/Settings'
import './App.css'

import record from './utils/record'
import setting from './utils/setting'

function App() {
  const dispatch = useDispatch()

  const [ currentDateNo, setCurrentDate ] = useState('')
  const [ played, setPlayed ] = useState(false)
  const [ openStatistic, setOpenStatistic ] = useState(false)
  const [ openSetting, setOpenSetting ] = useState(false)

  useEffect(() => {
     // get the date here so that things will be consistant util refresh
    const date = record.date()
    setCurrentDate(date)

    const s = setting.load()
    if (s.contrast) {
      dispatch(setContrast({ value: s.contrast }))
    }
    if (s.autoscroll) {
      dispatch(setAutoScroll({ value: s.autoscroll }))
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
        open={openSetting}
        handleClose={() => setOpenSetting(false)}
      />
    </>
  );
}

export default App
