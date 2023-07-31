import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";

const AppRouter = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");

  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              currentPassword={currentPassword}
              setCurrentPassword={setCurrentPassword}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRouter />}>
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
