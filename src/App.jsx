import { React } from 'react'
import "./App.css";
import ClientSide from "./ClientSide";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './AdminComponent/Login/AdminLogin'
import AdminRedirect from './AdminComponent/AdminRedirect'
import Logout from './AdminComponent/Logout/Logout'
import AllPages from './AdminComponent/AllPages/AllPages'
import AdminHeader from './AdminComponent/Header/AdminHeader'
// import PageComponents from './AdminComponent/PageComponents/PageComponents';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/admin/logout" element={<Logout />} />
        <Route exact path="/admin/all-pages" element={<AllPages />} />
        <Route exact path="/admin" element={<AdminRedirect />} />
        <Route exact path="/admin/login" element={<AdminLogin />} />
        <Route exact path="/" element={<ClientSide />} />
        {/* <Route exact path="/admin/page/:id" element={<PageComponents />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
