import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import RegisterCategory from "../pages/RegisterCategory";
import RegisterCoupon from "../pages/RegisterCoupon";
import Products from "../pages/Products";
import RegisterProduct from '../pages/RegisterProduct';
import Categories from "../pages/Categories";
import Coupons from "../pages/Coupons";
import Profile from "../pages/Profile";
import Product from "../pages/Product";


const ManagementRoute = () => {
    return (
        <Routes>
            <Route path="/registerProduct" element={<RegisterProduct />} />
            <Route path="/registerCategory" element={<RegisterCategory />} />
            <Route path="/registerCoupon" element={<RegisterCoupon />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/profile" element={<Profile />} />
            <Route
                path="*"
                element={<Navigate to="/home" replace />}
            />
        </Routes>
    )
}

export default ManagementRoute;