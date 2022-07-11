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
import Coupon from "../pages/Coupon";
import Category from "../pages/Category";
import Home from "../pages/Home";
import Store from "../pages/Store";


const ManagementRoute = () => {
    return (
        <Routes>
            <Route path="/registerProduct" element={<RegisterProduct />} />
            <Route path="/registerCategory" element={<RegisterCategory />} />
            <Route path="/registerCoupon" element={<RegisterCoupon />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/coupon/:id" element={<Coupon />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/store" element={<Store />} />
            <Route path="/home" element={<Home />} />
            <Route
                path="*"
                element={<Navigate to="/home" element={<Home />}  replace />}
            />
        </Routes>
    )
}

export default ManagementRoute;