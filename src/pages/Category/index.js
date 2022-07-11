import React, { useState, useEffect, useContext} from 'react';
import {
    Input,
    Button
} from '@chakra-ui/react';
import * as C from '../../styles/styles';
import { useParams } from 'react-router';
import { api } from '../../services/api';
import AuthContext from '../../contexts/auth';


export default function Category() {
    const { id } = useParams();
    const [category, setCategory] = useState('');
    const context = useContext(AuthContext);
    const currentUser = JSON.parse(context.getUser());

    useEffect(() => {
        const getCategory = () => {
            api.get('categories').then((response) => {
                let categories = response.data;
                categories.map((categ, index) => {
                    if (id === categ.id) {
                        setCategory(categ.name);
                    }
                })
                return;
            });
        }

        getCategory();
    }, [id]);


    const updateCategory = () => {


        const categoryUpdated = {
            name: category,
            user_id:currentUser.id.toString()
        }

        api.put('categories/' + id, categoryUpdated);
    }

    return (
        <React.Fragment>
            <C.ContainerColumn>
                <C.Title>Categoria</C.Title>
                <C.ContainerRow>
                    <C.ContainerRowCategory>
                        <C.DivInput>
                            <C.TextInput>Nome da Categoria</C.TextInput>
                            <Input
                                value={category}
                                width={400}
                                height={50}
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
                        onClick={updateCategory}
                    >
                        SALVAR
                    </Button>
                </C.ContainerButtonRegister>
            </C.ContainerColumn>
        </React.Fragment>
    );
}