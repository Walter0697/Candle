import React, { useState, useEffect } from 'react'
import {
  Grid,
} from '@mui/material'

import Header from './components/Header'
import Game from './components/game/Game'
import Statistics from './components/statistic/Statistics'
import './App.css'

import record from './utils/record'

function App() {
  const [ currentDateNo, setCurrentDate ] = useState('')
  const [ played, setPlayed ] = useState(false)
  const [ openStatistic, setOpenStatistic ] = useState(false)

  useEffect(() => {
     // get the date here so that things will be consistant util refresh
    const date = record.date()
    setCurrentDate(date)
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
    </>
  );
}

export default App
