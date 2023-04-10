import './App.css';

// packages
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

// components
import LoginForm from './components/auth/LoginForm';
import Home from './components/Home';
import Header from './components/header/Header';
import Categories from './components/categories/Categories'

function App() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
      navigate('/categories');
    }else {
      setAuthenticated(null);
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      {
        authenticated ?
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </>
        :
          <Routes>
            <Route path="/login" element={<LoginForm />} />
          </Routes>
      }
    </>
  );
}

export default App;
