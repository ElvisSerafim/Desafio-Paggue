import React, {useState, useContext } from 'react';
import * as C from '../../styles/styles';
import Profile from '../../assets/profile.png';
import Logo from '../../assets/logo.png';
import {FaBars} from 'react-icons/fa';
import Sidebar from '../SideBar';

import AuthContext from '../../contexts/auth';


export default function Header(props){
    const { signed } = useContext(AuthContext);
    const [showSideBar, setShowSideBar] = useState(false);

    const openSideBar = () => setShowSideBar(!showSideBar);

    return (
        <React.Fragment>
            <C.ContainerHeader>
                {signed === true ? (
                    <FaBars size={25} cursor={'pointer'} onClick={openSideBar} />
                ): <></>}
                {showSideBar && <Sidebar active={openSideBar} />} 
                <C.Icon height={'100px'} width={'170px'} src={Logo} />
                <C.Icon height={'35px'} width={'35px'} src={Profile}/>
            </C.ContainerHeader>
        </React.Fragment>
    )
}