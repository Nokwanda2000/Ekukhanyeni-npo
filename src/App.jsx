import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout'
import ContactUspage from './Pages/ContactUspage';
import BackToTop from './Components/Backtop';
function App() {

  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="ContactUspage" element={<ContactUspage />} />
            <Route path="BackToTop" element={<BackToTop />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
