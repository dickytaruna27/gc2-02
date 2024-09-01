import React, { useState, useEffect, useContext, createContext } from 'react'
import axios from 'axios'

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.access_token);
  
  const login = async (body) => {
    try {
      const { data } = await axios.post('https://server.dickytaruna.online/login', body);
      localStorage.setItem('access_token', data?.access_token);
      setIsAuthenticated(true);
    } catch (error) {
      throw error;
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('access_token')
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token')
    if(accessToken) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }} >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider