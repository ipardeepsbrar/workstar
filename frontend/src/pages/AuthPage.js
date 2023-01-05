import React from "react";

import Header from "../components/Header";
import EmptyElement from "../components//EmptyElement";
import { Navigate, Route, Routes } from "react-router-dom";
import LogInPage from "../components/authSubPages/LogInPage";
import RegisterPage from "../components/authSubPages/RegisterPage";

const AuthPage = (props) => {
  return (
    <>
      <Header />
      <EmptyElement />
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default AuthPage;
