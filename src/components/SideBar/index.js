import React from 'react';
import { Container, Content } from './styles';
import {
    FaTimes,
    FaUserAlt,
    FaBox
} from 'react-icons/fa';
import { RiCouponLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { IoStorefrontSharp } from "react-icons/io5";


import SideBarItem from '../SideBarItem';

export default function Sidebar({ active }) {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                <SideBarItem Icon={FaUserAlt} Text="Perfil" />
                <SideBarItem Icon={FaBox} Text="Produtos" />
                <SideBarItem Icon={RiCouponLine} Text="Cupons" />
                <SideBarItem Icon={BiCategory} Text="Categorias" />
                <SideBarItem Icon={IoStorefrontSharp} Text="Loja" />
            </Content>
        </Container>
    );
}