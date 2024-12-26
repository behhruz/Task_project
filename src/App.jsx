import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "./Dashboard/Login";
import Register from "./Dashboard/Register";
import AdminPanel from "./Dashboard/AdminPanel";
import Navbar from "./Components/Navbar";
import Portners from "./Components/Portners";
import Ot from "./Components/ot";
import Categories from "./Components/Category";
import Xm from "./Components/Cards";
import Carusel from "./Components/Carousel";
import Yurak from "./Components/yurak";
import PrivateRoute from "./Dashboard/PrivateRoute";
import Proekt from "./Components/Proyekt";
import CategoryPage from "./Components/CategoryPage"; // Dinamik kategoriya sahifasi

function App() {
  return (
    <Routes>
      {/* Auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<AdminPanel />} />

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Favorites page */}
      <Route path="/yrak" element={<Yurak />} />

      {/* Home page */}
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Carusel />
            <main>
              <Portners />
              <Ot />
              <Categories />
              <Xm />
              <Proekt />
            </main>
          </>
        }
      />

      {/* Category page with dynamic routing */}
      <Route path="/products/:category" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
