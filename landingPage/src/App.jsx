import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Details from './components/Details/Details'


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}
