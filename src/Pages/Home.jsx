import React from 'react'
import { useState } from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../Components/HeroBanner'
import ExerciseDetailes from './ExerciseDetailes'
import SerchExercises from '../Components/SerchExercises'
function Home() {
  return (
    <Box>
        <HeroBanner/>
        <SerchExercises/>
        <ExerciseDetailes/>
    </Box>
  )
}

export default Home
