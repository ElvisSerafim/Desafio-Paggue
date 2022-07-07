import React, {  } from 'react';
import {
    Input,
    Stack,
    Button
} from '@chakra-ui/react';
import * as C from '../../styles/styles';

export default function Profile() {

    return (
        <React.Fragment>
                <C.ContainerColumn>
                    <C.Title>Perfil</C.Title>
                    <C.ContainerRow>
                        <C.ContainerRegisterFields>
                            <Stack spacing={5}>
                                <C.DivInput>
                                    <C.TextInput>Nome Completo</C.TextInput>
                                    <Input
                                        width={400}
                                        height={50}
                                        name='email'
                                        placeholder='Endereço de Email'
                                    />
                                </C.DivInput>

                                <C.DivInput>
                                    <C.TextInput>Email</C.TextInput>
                                    <Input
                                        width={400}
                                        height={50}
                                        name='password'
                                        placeholder='Senha'
                                        type={'password'}
                                    />
                                </C.DivInput>
                                <C.DivInput>
                                    <C.TextInput>Razão Social</C.TextInput>
                                    <Input
                                        width={400}
                                        height={50}
                                        name='password'
                                        placeholder='Senha'
                                        type={'password'}
                                    />
                                </C.DivInput>
                                <C.DivInput>
                                    <C.TextInput>Senha</C.TextInput>
                                    <Input
                                        width={400}
                                        height={50}
                                        name='password'
                                        placeholder='Senha'
                                        type={'password'}
                                    />
                                </C.DivInput>

                            </Stack>

                        </C.ContainerRegisterFields>
                        <C.ContainerRegisterFields>
                            <Stack spacing={5}>
                                <C.DivInput>
                                    <C.TextInput>CPF/CNPJ</C.TextInput>
                                    <Input
                                        width={400}
                                        height={50}
                                        name='email'
                                        placeholder='Endereço de Email'
                                    />
                                </C.DivInput>

                                <C.DivInput>
                                    <C.TextInput>Nome Fantasia</C.TextInput>
                                    <Input
                                        width={400}
                                        height={50}
                                        name='password'
                                        placeholder='Senha'
                                        type={'password'}
                                    />
                                </C.DivInput>
                                <C.DivInput>
                                    <C.TextInput>Telefone</C.TextInput>
                                    <Input
                                        width={400}
                                        height={50}
                                        name='password'
                                        placeholder='Senha'
                                        type={'password'}
                                    />
                                </C.DivInput>
                                <C.ContainerButtonRegister>
                                    <Button width={'300px'} bg="primary">SALVAR</Button>
                                </C.ContainerButtonRegister>
                            </Stack>
                        </C.ContainerRegisterFields>
                    </C.ContainerRow>
                </C.ContainerColumn>
        </React.Fragment>
    );
}