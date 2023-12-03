import React from 'react'
import { useState } from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../Components/HeroBanner'
import ExerciseDetailes from './ExerciseDetailes'
import SerchExercises from '../Components/SerchExercises'
function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
        <HeroBanner/>
        <SerchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <ExerciseDetailes setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home