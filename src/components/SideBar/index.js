import React from 'react';
import { Container, Content } from './styles';
import {
    FaTimes
} from 'react-icons/fa';

import { options } from './options';
import SideBarItem from '../SideBarItem';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/auth';

export default function Sidebar({ active }) {
    const context = useContext(AuthContext);
    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active} backgroundColor={context.colorBackground}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                {options.map((option, index) => {
                    return (
                        <Link key={index} to={option.redirectTo} onClick={closeSidebar}>
                            <SideBarItem Icon={option.icon} Text={option.text} />
                        </Link>
                    )

                })}

            </Content>
        </Container>
    );
}