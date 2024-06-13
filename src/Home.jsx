import React from 'react'
import { BrowserRouter, Route , Router, Routes } from 'react-router-dom'
import Navbar from "../components/Hero/Navbar.jsx"
import Footer from "../components/Hero/Footer.jsx";
import Landing from  "../components/Hero/Landing.jsx"
import Food from "../components/Food/Food.jsx"
import Contact from "../components/Contact/Contact.jsx"
import Quote from "../components/Quote/Quote.jsx"
import Restaurant from "../components/Restaurant/Restaurant.jsx"

function Home() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} ></Route>
          <Route path='/quote' element={<Quote/>}></Route>
          <Route path='/restaurant' element={<Restaurant/>}></Route>
          <Route path='/food' element={<Food/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default Home