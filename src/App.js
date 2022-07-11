import React from "react";
import Global from './styles/global';
import Header from "./components/Header";
import { ChakraProvider } from '@chakra-ui/react'
import * as C from './styles/styles';
import { newTheme } from "./styles/theme";

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./contexts/auth";
import AppRoutes from "./routes/index";

export default function App() {
    return (
        <ChakraProvider theme={newTheme}>
            <BrowserRouter>
                <AuthProvider>
                    <C.Container >
                        <Header />
                        <AppRoutes />
                    </C.Container>
                    <Global />
                </AuthProvider>
            </BrowserRouter>
        </ChakraProvider >
    );
}