import React, { useState, useEffect, useContext } from 'react';
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
import { api } from '../../services/api';
import AuthContext from '../../contexts/auth';

export default function RegisterProduct() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const context = useContext(AuthContext);
    const currentUser = JSON.parse(context.getUser());

    useEffect(() => {
        const getCategories = () => {
            api.get('categories').then((response => {
                let categoriesData = response.data;
                let categoriesAux = [];
                categoriesData.map((categ) => {
                    if (categ.user_id === currentUser.id.toString()) {
                        let categAux = categ;
                        categoriesAux.push(categAux);
                    }
                })
                setCategories(categoriesAux);
            }));
        }

        getCategories();
    }, []);

    function findCategoryId() {
        let category_id;
        categories.map((categ) => {
            if (categ.name === category) {
                category_id = categ.id;
            }
            return categ.id;
        });

        return category_id;
    }

    const createProduct = () => {

        let category_id = findCategoryId();

        const product = {
            name: name,
            description: description,
            price: price,
            stock: stock,
            category_id: category_id,
            id: Math.floor(Math.random * 100000000),
            user_id:currentUser.id.toString()

        }

        api.post('products/', product);
    }

    return (
        <React.Fragment>
            <C.ContainerColumn>
                <C.Title>Registrar Produto</C.Title>
                <C.ContainerRow>
                    <C.ContainerRegisterFields>
                        <Stack spacing={5}>
                            <C.DivInput>
                                <C.TextInput>Nome</C.TextInput>
                                <Input
                                    height={50}
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                            </C.DivInput>

                            <C.DivInput>
                                <FormControl>
                                    <FormLabel htmlFor='category'>Categoria</FormLabel>
                                    <Select value={category} onChange={e => setCategory(e.target.value)} id='category' placeholder='Selecione uma categoria'>
                                        {categories.map((categ, index) => {
                                            return (
                                                <option > {categ.name} </option>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </C.DivInput>
                            <C.DivInput>
                                <C.TextInput>Descrição</C.TextInput>
                                <Textarea value={description} onChange={e => setDescription(e.target.value)} />
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
                                    <Input value={price} onChange={e => setPrice(e.target.value)} type={'number'} />
                                </InputGroup>
                            </C.DivInput>

                            <C.DivInput>
                                <C.TextInput>Estoque</C.TextInput>
                                <Input
                                    
                                    height={50}
                                    type={'number'}
                                    onChange={e => setStock(e.target.value)}
                                    value={stock}
                                />
                            </C.DivInput>

                        </Stack>
                    </C.ContainerRegisterFields>
                </C.ContainerRow>
                <C.ContainerButtonRegister padding={'20px'}>
                    <Button onClick={createProduct} width={'300px'} height={'50px'} bg="primary">CADASTRAR</Button>
                </C.ContainerButtonRegister>
            </C.ContainerColumn>
        </React.Fragment>
    );
}