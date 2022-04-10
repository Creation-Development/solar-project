import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AdminLogin from './AdminComponent/Login/AdminLogin';
import AdminRedirect from './AdminComponent/AdminRedirect';
import AdminHeader from './AdminComponent/Header/AdminHeader';

function App() {
  return (
    <>
      {
        !localStorage.getItem("role") ?
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
          :
          <Router>
            <AdminHeader />
            <Routes>
              <Route exact path="/admin" element={<AdminRedirect />} />
              <Route exact path="/admin/login" element={<AdminLogin />} />
            </Routes>
          </Router>
      }
    </>
  );
}

export default App;
