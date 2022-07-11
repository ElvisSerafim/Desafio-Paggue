import React, { useEffect, useState, useContext } from 'react';
import * as C from '../../styles/styles';
import {
    Button,
    List,
    ListItem,
    Divider
} from '@chakra-ui/react';

import { TiDelete } from 'react-icons/ti';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth';

export default function Categories() {

    const context = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const currentUser = JSON.parse(context.getUser());

    useEffect(() => {
        const getCategories = () => {

            api.get('categories').then((response) => {
                let categoriesData = response.data;
                let categoriesAux = [];
                categoriesData.map((categ) => {
                    if (categ.user_id === currentUser.id.toString()) {
                        let categAux = categ;
                        categoriesAux.push(categAux);
                    }
                })
                setCategories(categoriesAux);
            });
        }

        getCategories();
    }, [categories]);

    const deleteCategory = (idCategory) => {
        api.delete('categories/' + idCategory);
    }

    return (
        <React.Fragment>
            <C.ContainerColumn>
                <C.Title>Categorias</C.Title>
                <C.ContainerRow>
                    <C.ContainerList>
                        <List width={'100%'} spacing={3}>
                            {categories.map((category, index) => {
                                return (
                                    <>
                                        <ListItem key={index}>
                                            <C.ContainerRow>
                                                <Link to={"/category/" + category.id}>
                                                    {category.name}
                                                </Link>
                                                <TiDelete onClick={e => deleteCategory(category.id)} id={category.id} cursor={'pointer'} size={30} />
                                            </C.ContainerRow>
                                        </ListItem>
                                        <Divider />
                                    </>
                                )
                            })}
                        </List>
                    </C.ContainerList>
                </C.ContainerRow>
                <C.ContainerButton padding={'100px'}>
                    <Link to={'/registerCategory'}>
                        <Button width={'300px'} height={'50px'} bg="primary">CADASTRAR CATEGORIA</Button>
                    </Link>
                </C.ContainerButton>
            </C.ContainerColumn>
        </React.Fragment>
    );
}