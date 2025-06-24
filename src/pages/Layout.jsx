import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Layout = ({children})=> {
  return (
    <div>
      <Navbar />
       <main className='p-10 m-6 bg-slate-100'>
        {children}
       </main>
      <Footer />
    </div>
  )
}

export default Layout
