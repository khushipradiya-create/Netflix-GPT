import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'

const Body = () => {
  const dispatch = useDispatch()
  
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
  ])

  


  return (
    <div>
      {/* navigate system on */}
      <RouterProvider router={appRoute} />
    </div>
  );

};

export default Body