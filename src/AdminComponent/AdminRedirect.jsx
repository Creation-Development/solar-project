import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminRedirect = () => {
    const navigation = useNavigate()
    useEffect(() => {
        localStorage.setItem("role", "admin")
        navigation("/admin/login")
    }, []);
    return (
        <div>AdminRedirect</div>
    )
}

export default AdminRedirect