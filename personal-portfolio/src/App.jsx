import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router'
import Home from './screens/Home'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: false,    // animate only once while scrolling down
      offset:120
    });
  }, []);
  return (
    
    <div>
      <Routes>
        <Route element={<Home></Home>} path='/'/>
      </Routes>
    </div>
  )
}

export default App