import React from 'react'
import Layout from '../pages/Layout'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

function GlobalRoute() {
  return (
    <div>
      <Layout>
        <Routes>
            <Route path='/' element={<Home />}>Home</Route>
            <Route path='/about' element={<About />}>About</Route>
            <Route path='/contact' element={<Contact />}>Contact</Route>
        </Routes>
      </Layout>
    </div>
  )
}

export default GlobalRoute
