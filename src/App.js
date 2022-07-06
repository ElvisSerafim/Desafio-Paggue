import React from "react";
import Global from './styles/global';
import Header from "./components/Header";
import { ChakraProvider } from '@chakra-ui/react'
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import * as C from './styles/styles';
import { newTheme } from "./styles/theme";


export default function App() {

    return (
        <ChakraProvider theme={newTheme}>
            <C.Container>
                <Header />
                <Cadastro />
                <Global />
            </C.Container>
        </ChakraProvider>
    );
}