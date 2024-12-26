import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Dashboard/Login";
import Register from "./Dashboard/Register";
import AdminPanel from "./Dashboard/AdminPanel";
import Navbar from "./Components/Navbar";
import Portners from "./Components/Portners";
import Ot from "./Components/ot";
import Categories from "./Components/Category";
import Xm from "./Components/Cards";
import Carusel from "./Components/Carousel";
import Pages from "./Components/Pages";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import Help from "./Components/Help";
import Tearms from "./Components/Tearms";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Massages from "./Components/Massages";
import Habar from "./Components/Habar";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/pages" element={<Pages />} />

        {/* Redirect from root to home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Home Page */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Carusel />
              <Portners />
              <Ot />
              <Categories />
              <Xm />
              <Footer />
            </>
          }
        />
        
        {/* Product Page */}
        <Route
          path="/product"
          element={
            <>
              <Navbar />
              <Product />
              <Footer />
            </>
          }
        />
        <Route 
        path="/help"
        element={
          <>
          <Help/>
          </>
        }
        />
        <Route 
        path="tearms/"
        element={
          <>
          <Tearms/>
          </>
        }
        />
        <Route
        path="/privacy"
        element={
          <>
          <PrivacyPolicy/>
          </>
        }
        />
        <Route
        path="/massages"
        element={
          <>
          <Massages/>
          </>
        }
        />
        <Route
        path="/habar"
        element={
          <>
          <Habar/>
          </>
        }
        />

        
      </Routes>
    </Router>
  );
}

export default App;
