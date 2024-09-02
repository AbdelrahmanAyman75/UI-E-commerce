import React from 'react'
import Notfound from '../../Assets/imges/15.png'
export default function NotFound() {
  return (
    <>
    <div className='container text-danger'>
   <h1 className=''> Not Found......!! <span className=''>404</span>  </h1>
    <img className='w-50 d-flex justify-content-center' src={Notfound} alt="error" />
   </div>
    </>
  )
}
