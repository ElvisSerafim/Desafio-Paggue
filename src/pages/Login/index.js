import React, { useState, useContext } from 'react';
import { 
    Input, 
    Stack,
    Button } from '@chakra-ui/react';
import * as C from '../../styles/styles';

import { api } from '../../services/api';

import AuthContext from '../../contexts/auth';
import { useNavigate, Link } from 'react-router-dom';



export default function Login() {

    const context = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleChange = (event) => {
        if (event.target.name === 'email')
            setEmail(event.target.value)
        else
            setPassword(event.target.value)
    }

    const login = () => {
        api.get('users').then((response) =>{
            let users =  response.data;
            users.map((user, index) => {
                if(user.email === email && user.password === password){
                    context.setCurrentUser(user);
                    navigate('/home');
                    return user;
                }
                return user; 
            })
        }) 
    }

    return (
        <React.Fragment>
            <C.ContainerForm >
                <C.ContainerInput>
                    <C.Title>Login</C.Title>
                    <Stack spacing={5}>
                        <C.DivInput>
                            <C.TextInput>Email</C.TextInput>
                            <Input
                                width={300}
                                height={50}
                                name='email'
                                value={email}
                                onChange={handleChange}
                                placeholder='Endereço de Email'
                            />
                        </C.DivInput>

                        <C.DivInput>
                            <C.TextInput>Senha</C.TextInput>
                            <Input
                                width={300}
                                height={50}
                                name='password'
                                value={password}
                                onChange={handleChange}
                                placeholder='Senha'
                                type={'password'}
                            />
                        </C.DivInput>
                        <C.DivLinkRegister>
                            <Link to="/register">Registre-se</Link>
                        </C.DivLinkRegister>
                        <Button onClick={login} bg="primary">ENTRAR</Button>
                    </Stack>
                </C.ContainerInput>
            </C.ContainerForm>
        </React.Fragment>
    );
}