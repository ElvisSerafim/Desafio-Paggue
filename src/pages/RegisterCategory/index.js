import React, { useState, useContext } from 'react';
import {
    Input,
    Button
} from '@chakra-ui/react';
import * as C from '../../styles/styles';
import { api } from '../../services/api';
import AuthContext from '../../contexts/auth';

export default function RegisterCategory() {

    const [category, setCategory] = useState('');
    const context = useContext(AuthContext);
    const currentUser = JSON.parse(context.getUser());

        
    const createCategory = () => {

        const coupon = {
            name:category,
            id: Math.floor(Math.random * 100000000),
            user_id:currentUser.id.toString()
        }

        api.post('categories/', coupon);
        setCategory('');
    }

    return (
        <React.Fragment>
            <C.ContainerColumn>
            <C.Title>Registrar Categoria</C.Title>
                <C.ContainerRow>
                    <C.ContainerRowCategory>
                        <C.DivInput>
                            <C.TextInput>Nome da Categoria</C.TextInput>
                            <Input
                                width={300}
                                height={50}
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            />
                        </C.DivInput>
                    </C.ContainerRowCategory>
                </C.ContainerRow>
                <C.ContainerButtonRegister padding={'150px'}>
                    <Button
                        width={'300px'}
                        height={'50px'}
                        bg="primary"
                        onClick={createCategory}
                    >
                        CADASTRAR
                    </Button>
                </C.ContainerButtonRegister>
            </C.ContainerColumn>
        </React.Fragment>
    );
}