import React, { useEffect, useState } from 'react';
import * as C from '../../styles/styles';
import {
    Button,
    List,
    ListItem,
    Divider,
} from '@chakra-ui/react';

import { TiDelete } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('products').then((response) => {
            let productsData = response.data;
            console.log(productsData);
            setProducts(productsData);
        })
    }, [])


    return (
        <React.Fragment>
            <C.ContainerColumn userLogged={true}>
                <C.Title>Produtos</C.Title>
                <C.ContainerRow>
                    <C.ContainerList>
                        <List width={'100%'} spacing={3}>
                            {products.map((product, index) => {
                                return (
                                    <>
                                        <ListItem key={index}>
                                            <C.ContainerRow>
                                                <Link to={"/product/"+product.id}>
                                                    {product.name}
                                                </Link>
                                                <TiDelete cursor={'pointer'} size={30} />
                                            </C.ContainerRow>
                                        </ListItem>
                                        <Divider />
                                    </>
                                )

                            })}
                        </List>
                    </C.ContainerList>
                </C.ContainerRow>
                <C.ContainerButton padding={'200px'}>
                    <Button width={'300px'} height={'50px'} bg="primary">CADASTRAR PRODUTO</Button>
                </C.ContainerButton>
            </C.ContainerColumn>
        </React.Fragment >
    );
}