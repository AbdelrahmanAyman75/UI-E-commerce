import React from 'react'

import { Outlet } from 'react-router-dom'
import Navebar from '../Navebar/Navebar'
import Footer from '../Footer/Footer'
import LandingPage from '../LandingPage/LandingPage'
export default function Layout() {
  return (
    <>
      {/* <Navebar/> */}
      <div className=' '>
      <Outlet>

      </Outlet>
        </div>
      <Footer/>
    </>
  )
}
