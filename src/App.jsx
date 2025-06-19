import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Consulting from './pages/Consulting'
import Training from './pages/Training'

import Career from './pages/Career'
import ContactUs from './pages/ContactUs'
import Header from './Components/Header'
import Footer from './Components/Footer'
import RecruitmentService from './pages/RecruitmentService'
const App=()=>{
  return(
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="Home" element={<Home/>}></Route>
    <Route path="Consulting" element={<Consulting/>}></Route>
    <Route path="Training" element={<Training/>}></Route>
    <Route path="RecruitmentService" element={<RecruitmentService/>}></Route>
    <Route path="Career" element={<Career/>}></Route>
    <Route path="ContactUs" element={<ContactUs/>}></Route>
 
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
