import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route}from'react-router-dom';
import Home from './pages/home/Home';
import Lista from './pages/list/Lista';
import Hotel from './pages/hotel/Hotel';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='hotels' element={<Lista/>}/>
      <Route path='hotels/:id' element={<Hotel/>}/>


      
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
