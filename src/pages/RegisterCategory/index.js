import React, { useState } from 'react';
import {
    Input,
    Button
} from '@chakra-ui/react';
import * as C from '../../styles/styles';
import { api } from '../../services/api';

export default function RegisterCategory() {

    const [category, setCategory] = useState('');

    const createCategory = () => {

        const coupon = {
            name:category,
            id: Math.floor(Math.random * 100000000)
        }

        api.post('categories/', coupon);
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
                                width={400}
                                height={50}
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            />
                        </C.DivInput>
                    </C.ContainerRowCategory>
                </C.ContainerRow>
                <C.ContainerButtonRegister padding={'200px'}>
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