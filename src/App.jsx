import { React } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import ClientSide from "./ClientSide";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './AdminComponent/Login/AdminLogin'
import AdminRedirect from './AdminComponent/AdminRedirect'
import Logout from './AdminComponent/Logout/Logout'
import AllPages from './AdminComponent/AllPages/AllPages'
import HeaderEdit from './AdminComponent/EditComponent/Header/HeaderEdit';
import HomeEdit from './AdminComponent/EditComponent/Home/HomeEdit';

require('dotenv').config()

const App = () => {
  return (
    <Router>
      <ToastContainer style={{marginTop:"50px"}}/>
      <Routes>
        <Route exact path="/admin/logout" element={<Logout />} />
        <Route exact path="/admin/all-pages" element={<AllPages />} />
        <Route exact path="/admin" element={<AdminRedirect />} />
        <Route exact path="/admin/login" element={<AdminLogin />} />
        <Route exact path="/" element={<ClientSide />} />
        <Route exact path="/admin/header/:id" element={<HeaderEdit />} />
        <Route exact path="/admin/home/:id" element={<HomeEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
