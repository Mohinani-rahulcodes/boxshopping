import React from 'react'
import {createBrowserRouter, RouterProvider , useLocation} from "react-router-dom";
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import ContactUS from './components/ContactUS'
import Gallery from './components/Gallery'
import ScrollTop from './components/ScrollTop';


function App() {

  
  const router = createBrowserRouter([
    {
    path:"/",
    element: <div>
      <Navbar />
      <ScrollTop />
      <Landingpage />
    </div>
  },
  {
    path:"/gallery",
    element: <div>
      <Navbar />
      <ScrollTop />
      <Gallery />
    </div>
  },
  {
    path:"/contactus",
    element: <div>
      <Navbar />
      <ScrollTop />
      <ContactUS />
    </div>
  }
  
])
  return (
    <div className='bg-gradient-to-r from-[#fefae0] to-[#faedcd] min-h-[100vh] w-full'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App