import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout'
import ContactUspage from './Pages/ContactUspage';
import BackToTop from './Components/Backtop';
import Homepage from './Pages/Homepage';
import AboutUspage from './Pages/AboutUspage';
import Timetablespage from './Pages/Timetablespage';
import Eventspage from './Pages/Eventspage';

function App() {

  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="ContactUspage" element={<ContactUspage />} />
            <Route path="AboutUspage" element={<AboutUspage />} />
            <Route path="Timetablespage" element={<Timetablespage />} />
            <Route path="Eventspage" element={<Eventspage />} />
            <Route path="BackToTop" element={<BackToTop />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
