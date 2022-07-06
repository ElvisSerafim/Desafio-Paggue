import React, { useState } from 'react';
import { 
    Input, 
    Stack,
    Link,
    Button } from '@chakra-ui/react';
import * as C from '../../styles/styles';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event) => {
        if (event.target.name == 'email')
            setEmail(event.target.value)
        else
            setPassword(event.target.value)
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
                            <Link color='#1EF098'>Registre-se</Link>
                        </C.DivLinkRegister>
                        <Button bg="primary">ENTRAR</Button>
                    </Stack>
                </C.ContainerInput>
            </C.ContainerForm>
        </React.Fragment>
    );
}