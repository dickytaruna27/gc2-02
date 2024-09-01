import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from '../component/navbar'
import { useAuth } from '../context/auth'

const BaseLayout = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated])
  

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default BaseLayout