import React from "react";
import Global from './styles/global';
import Header from "./components/Header";
import { ChakraProvider } from '@chakra-ui/react'
import * as C from './styles/styles';
import { newTheme } from "./styles/theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterCategory from "./pages/RegisterCategory";
import RegisterCoupon from "./pages/RegisterCoupon";
import Products from "./pages/Products";
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterProduct from './pages/RegisterProduct';
import Categories from "./pages/Categories";
import Coupons from "./pages/Coupons";
import Profile from "./pages/Profile";

export default function App() {

    return (
        <ChakraProvider theme={newTheme}>
            <BrowserRouter>
                <C.Container>
                    <Header logged={true} />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/registerProduct" element={<RegisterProduct />} />
                        <Route path="/registerCategory" element={<RegisterCategory />} />
                        <Route path="/registerCoupon" element={<RegisterCoupon />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/coupons" element={<Coupons />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                    <Global />
                </C.Container>
            </BrowserRouter>
        </ChakraProvider>
    );
}