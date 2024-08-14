// Importing custom CSS:
import './App.css'

// Importing Components: 
import { useState, useEffect } from 'react';


// Importing Components: 
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Layout from './Components/Layout/Layout';
import Notfound from './Components/Notfound/Notfound';
import Navbar from './Components/Navbar/Navbar';



// Importing Router components:
import { createBrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom'


const routing = createHashRouter([
  {element: <Layout />, path:"", children:[
    {index:true, element: <Home />},
    {path:"/about", element:<About />},
    {path:"/contact", element:<Contact />},
    {path:"/portfolio", element:<Portfolio />},
    {path:"*", element:<Notfound />},
  ]}
])



function App() {
  

  return (
    <>
      <RouterProvider router={routing}>
        <Navbar />
      </RouterProvider>
    </>
  )
}

export default App
