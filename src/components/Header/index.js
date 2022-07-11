import React, { useState, useContext } from 'react';
import * as C from '../../styles/styles';
import Profile from '../../assets/profile.png';
import Logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../SideBar';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/auth';


export default function Header(props) {
    const { signed } = useContext(AuthContext);
    const [showSideBar, setShowSideBar] = useState(false);
    const context = useContext(AuthContext);
    const openSideBar = () => setShowSideBar(!showSideBar);

    return (
        <React.Fragment>
            <C.ContainerHeader backgroundColor={context.colorBackground} >
                {signed === true ? (
                    <FaBars size={25} cursor={'pointer'} onClick={openSideBar} />
                ) : <></>}
                {showSideBar && <Sidebar active={openSideBar} />}
                <C.Icon height={'100px'} width={'170px'} src={Logo} />
                {signed === true ? (
                    <Link to={'/profile'}>
                        <C.Icon height={'35px'} width={'35px'} src={Profile} />
                    </Link>
                ) :
                    <Link to={'/'}>
                        <C.Icon height={'35px'} width={'35px'} src={Profile} />
                    </Link>
                }
            </C.ContainerHeader>
        </React.Fragment>
    )
}