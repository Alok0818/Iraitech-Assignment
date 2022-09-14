import React from "react";
import { Route, Routes } from "react-router-dom";
import UserProfile  from "../components/UserProfile";
import SignIn  from "../components/SignIn";
import SignUp  from "../components/SignUp";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/profile/:id" element={<UserProfile />} />
      </Routes>
    </>
  );
}
