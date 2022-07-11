import React, {useState, useContext} from 'react';
import {
    Input,
    Stack,
    Button
} from '@chakra-ui/react';
import * as C from '../../styles/styles';
import { api } from '../../services/api';
import AuthContext from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';


export default function Register() {

    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [name, setName] = useState('');

    const context = useContext(AuthContext);


    const createUser = () => {
        
        const user = {
            email: email,
            password: password,
            cpf_cnpj: cpfCnpj,
            name: name,
            phone: phone,
            razao_social: razaoSocial,
            nome_fantasia: nomeFantasia,
            id:Date.now(),
        }

        const store = {
            minimum_amount: "",
            discount: "",
            user_id:Date.now(),

        }
        api.post('users/', user);
        api.post('store', store);
        context.setCurrentUser(user);
        navigate('/home');
    }


    return (
        <React.Fragment>
            <C.ContainerColumn>
                <C.Title>Cadastro</C.Title>
                <C.ContainerRow>
                    <C.ContainerRegisterFields>
                        <Stack spacing={5}>
                            <C.DivInput>
                                <C.TextInput>Nome Completo</C.TextInput>
                                <Input
                                    width={400}
                                    height={50}
                                    name='email'
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
                                    name='password'
                                    placeholder='Senha'
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
                                <Button onClick={createUser} width={'300px'} bg="primary">CADASTRAR</Button>
                            </C.ContainerButtonRegister>
                        </Stack>
                    </C.ContainerRegisterFields>
                </C.ContainerRow>
            </C.ContainerColumn>
        </React.Fragment>
    );
}