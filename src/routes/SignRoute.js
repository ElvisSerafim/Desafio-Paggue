import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Login from '../pages/Login';
import Register from "../pages/Register";

const SignRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    )
}

export default SignRoute;