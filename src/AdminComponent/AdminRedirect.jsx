import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import App from '../App'

const AdminRedirect = () => {
    const navigation = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("user_token")) {
            navigation("/admin/all-pages")
        }
        else {
            navigation("/admin/login")
        }
    }, []);
    return (
        <div></div>
    )
}

export default AdminRedirect