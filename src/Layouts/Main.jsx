import React from 'react'
import LoginPage from '../components/LoginPage/LoginPage'
import TopNavBar from '../components/Shared/TopNavBar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <TopNavBar />
      <Outlet />
      
    </div>
  )
}

export default Main
