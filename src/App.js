import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from './Componint/Layout/Layout'

import About from './Componint/About/About'
import NotFound from './Componint/NotFound/NotFound'

import ProductDetails from './Componint/PeoductDetails/ProductDetails'
import Home from './Componint/Home/Home'
import LandingPage from './Componint/LandingPage/LandingPage'
export default function App() {

  let QueryClients = new QueryClient()
  let Routers = createHashRouter([{
    path: '', element: <Layout />, children: [
      // { path: '/', element: <Navigate to={'/Home'} /> },
      {path:"/",element: <LandingPage/>},
      { path: 'Home', element: <Home/> },
      { path: '/productDetails/:id', element: <ProductDetails /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },

    ]

  }])
  return (
    <>
      <QueryClientProvider client={QueryClients}>

        <RouterProvider router={Routers}></RouterProvider>
      </QueryClientProvider>
    </>
  )
}
