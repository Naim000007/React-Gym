import React  from 'react'
import {Route , Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ExerciseDetailes from './Pages/ExerciseDetailes'
import Footer from './Components/Footer'


function App() {


  return (
    <Box width='400px' sx={{width: {xl:'1488px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/exercise/:id' element={<ExerciseDetailes/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App
