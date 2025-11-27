import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './media.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Common/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About/About.jsx'
import ManagementSpeak from './ManagementSpeakComponents/ManagementSpeak.jsx'
import OurJourney from './Pages/OurJourney/OurJourney.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/management-speak' element={<ManagementSpeak />} />
        <Route path='/our-journey' element={<OurJourney/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
