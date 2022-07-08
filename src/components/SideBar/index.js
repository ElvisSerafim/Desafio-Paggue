import React from 'react';
import { Container, Content } from './styles';
import {
    FaTimes
} from 'react-icons/fa';

import { options } from './options';
import SideBarItem from '../SideBarItem';
import { Link } from 'react-router-dom';

export default function Sidebar({ active }) {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                {options.map((option, index) => {
                    return (
                        <Link to={option.redirectTo} onClick={closeSidebar}>
                            <SideBarItem Icon={option.icon} Text={option.text} />
                        </Link>
                    )

                })}

            </Content>
        </Container>
    );
}