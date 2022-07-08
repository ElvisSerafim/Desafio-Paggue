import React, {useEffect, useState } from 'react';
import {
    Input,
    Stack,
    Textarea,
    FormControl,
    FormLabel,
    Select,
    InputLeftElement,
    InputGroup,
    Button
} from '@chakra-ui/react';
import * as C from '../../styles/styles';

import { useParams } from 'react-router';
import { api } from '../../services/api';


export default function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        api.get('products').then((response) => {
            let productsData = response.data;
            console.log(id)
            productsData.map((prod, index) => {
                if(id === prod.id)
                    setProduct(prod)
            })
            return null;
        })
    }, [id])

    return (
        <React.Fragment>
            <C.ContainerColumn userLogged={true}>
                <C.ContainerRow>
                    <C.ContainerRegisterFields>
                        <Stack spacing={5}>
                            <C.DivInput>
                                <C.TextInput>Nome</C.TextInput>
                                <Input
                                    width={400}
                                    height={50}
                                    value={product.name}
                                />
                            </C.DivInput>

                            <C.DivInput>
                                <FormControl>
                                    <FormLabel htmlFor='category'>Categoria</FormLabel>
                                    <Select id='category' placeholder='Selecione uma categoria'>
                                        <option>United Arab Emirates</option>
                                        <option>Nigeria</option>
                                    </Select>
                                </FormControl>
                            </C.DivInput>
                            <C.DivInput>
                                <C.TextInput>Descrição</C.TextInput>
                                <Textarea />
                            </C.DivInput>
                        </Stack>

                    </C.ContainerRegisterFields>
                    <C.ContainerRegisterFields>
                        <Stack spacing={5}>
                            <C.DivInput>
                                <C.TextInput>Preço</C.TextInput>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.2em'
                                        children='$'
                                    />
                                    <Input type={'number'} />
                                </InputGroup>
                            </C.DivInput>

                            <C.DivInput>
                                <C.TextInput>Estoque</C.TextInput>
                                <Input
                                    width={400}
                                    height={50}
                                    name='password'
                                    type={'number'}
                                />
                            </C.DivInput>

                        </Stack>
                    </C.ContainerRegisterFields>
                </C.ContainerRow>
                <C.ContainerButtonRegister padding={'20px'}>
                    <Button width={'300px'} height={'50px'} bg="primary">CADASTRAR</Button>
                </C.ContainerButtonRegister>
            </C.ContainerColumn>
        </React.Fragment>
    );
}