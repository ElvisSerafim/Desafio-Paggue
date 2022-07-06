import React from 'react';
import * as C from '../../styles/styles';
import Profile from '../../assets/profile.png';
import Logo from '../../assets/logo.png';


export default function Header(){
    return (
        <React.Fragment>
            <C.ContainerHeader>
                <C.Icon height={'100px'} width={'170px'} src={Logo} />
                <C.Icon height={'35px'} width={'35px'} src={Profile}/>
            </C.ContainerHeader>
        </React.Fragment>
    )
}