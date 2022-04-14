import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigation = useNavigate()
  useEffect(() => {
    localStorage.clear()
    navigation("/admin/login")
  }, []);
  return (
    <div>

    </div>
  )
}

export default Logout