import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
  const navigation = useNavigate()
  useEffect(() => {
    localStorage.clear()
    toast.success("Logout Successfully")
    navigation("/admin/login")
  }, []);
  return (
    <div>

    </div>
  )
}

export default Logout