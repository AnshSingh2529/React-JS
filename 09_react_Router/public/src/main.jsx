import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/layout'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import User from './components/User/User'
import Githubfollowers from './components/Githubfollowers/Githubfollowers'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//       path: '',
//       element: <Home /> 
//       },
//       {
//       path:'about',
//       element: <About />
//       },
//       {
//       path:'contactUs',
//       element: <ContactUs />
//       }
//     ]
//     // we can add more children like about/CantactUs
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contactUs' element={<ContactUs />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Githubfollowers />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
