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
import OurTeam from './Pages/OurTeam/OurTeam.jsx'
import CsrSocialResponsibility from './Pages/CsrSocialResponsibility/CsrSocialResponsibility.jsx'
import NewsLatter from './Pages/NewsLatter/NewsLatter.jsx'
import NriCorner from './Pages/NriCorner/NriCorner.jsx'
import WhyJodhpur from './Pages/WhyJodhpur/WhyJodhpur.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/management-speak' element={<ManagementSpeak />} />
        <Route path='/our-journey' element={<OurJourney />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/csr-social-responsibility' element={<CsrSocialResponsibility />} />
        <Route path='/newsletter' element={<NewsLatter />} />
        <Route path='/nri-corner' element={<NriCorner />} />
        <Route path='/why-invest-in-jodhpur' element={<WhyJodhpur/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
