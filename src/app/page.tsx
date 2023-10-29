"use client"
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Login from './login/page'
import Signup from './signup/page'
import React from 'react'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes> */}
    </BrowserRouter>
    
    </>
    
  )
}
