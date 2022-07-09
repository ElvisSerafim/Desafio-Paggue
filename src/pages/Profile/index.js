import React, { useEffect, useState, useContext} from 'react';
import {
    Input,
    Stack,
    Button
} from '@chakra-ui/react';
import * as C from '../../styles/styles';

import { api } from '../../services/api';
import AuthContext from '../../contexts/auth';

export default function Profile() {

    const [user, setUser] = useState({});
    const context = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {

        const currentUser = JSON.parse(context.getUser());
        console.log(currentUser);
        setUser(currentUser);
        setEmail(currentUser.email);
        setPassword(currentUser.password);
        setName(currentUser.name);
        setCpfCnpj(currentUser.cpf_cnpj);
        setPhone(currentUser.phone);
        setNomeFantasia(currentUser.nome_fantasia);
        setRazaoSocial(currentUser.razao_social);

    }, [context.user]);

    const updateUser = () => {


        const userUpdated = {
            email: email,
            password:password,
            cpf_cnpj:cpfCnpj,
            name:name,
            phone:phone,
            razao_social:razaoSocial,
            nome_fantasia: nomeFantasia
        }
        console.log(user.id);
        api.put('users/' + user.id, userUpdated);
        context.setCurrentUser(userUpdated);
    } 


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
                                        value={name}
                                        onChange={e => setName(e.target.value)}                                      
                                    />
                                </C.DivInput>

                                <C.DivInput>
                                    <C.TextInput>Email</C.TextInput>
                                    <Input
                                        width={400}
                                        height={50}
                                        type={'email'}
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}                                      

                                    />
                                </C.DivInput>
                                <C.DivInput>
                                    <C.TextInput>Razão Social</C.TextInput>
                                    <Input
                                        width={400}
                                        height={50}
                                        value={razaoSocial}
                                        onChange={e => setRazaoSocial(e.target.value)}                                      
                                    />
                                </C.DivInput>
                                <C.DivInput>
                                    <C.TextInput>Senha</C.TextInput>
                                    <Input
                                        width={400}
                                        height={50}
                                        type={'password'}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}                                      

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
                                        type={'number'}
                                        value={cpfCnpj}
                                        onChange={e => setCpfCnpj(e.target.value)}                                      

                                    />
                                </C.DivInput>

                                <C.DivInput>
                                    <C.TextInput>Nome Fantasia</C.TextInput>
                                    <Input
                                        width={400}
                                        height={50}
                                        value={nomeFantasia}
                                        onChange={e => setNomeFantasia(e.target.value)}                                      

                                    />
                                </C.DivInput>
                                <C.DivInput>
                                    <C.TextInput>Telefone</C.TextInput>
                                    <Input
                                        width={400}
                                        height={50}
                                        type={'number'}
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}                                      

                                    />
                                </C.DivInput>
                                <C.ContainerButtonRegister>
                                    <Button onClick={updateUser} width={'300px'} bg="primary">SALVAR</Button>
                                </C.ContainerButtonRegister>
                            </Stack>
                        </C.ContainerRegisterFields>
                    </C.ContainerRow>
                </C.ContainerColumn>
        </React.Fragment>
    );
}