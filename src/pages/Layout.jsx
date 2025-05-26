import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Layout = ({children})=> {
  return (
    <div>
      <Navbar />
       <main className='pt-6 bg-slate-700'>
        {children}
       </main>
      <Footer />
    </div>
  )
}

export default Layout
