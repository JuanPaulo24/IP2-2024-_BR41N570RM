import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

export default function LoginRouter() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}
