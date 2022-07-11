import React, { useEffect, useState, useContext } from 'react';
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
import AuthContext from '../../contexts/auth';

export default function Products() {
    
    const context = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const currentUser = JSON.parse(context.getUser());

    useEffect(() => {

        api.get('products').then((response) => {
            let productsData = response.data;
            let productsAux = [];
            productsData.map((prod) => {
                console.log(prod);
                if(prod.user_id === currentUser.id.toString()){
                    let prodAux = prod;
                    productsAux.push(prodAux);
                }
            })
            setProducts(productsAux);
        })
    }, [currentUser.id, products]);

    const deleteProduct = (idProduct) => {
        console.log(idProduct);
        api.delete('products/' + idProduct);
    }


    return (
        <React.Fragment>
            <C.ContainerColumn>
                <C.Title>Produtos</C.Title>
                <C.ContainerRow>
                    <C.ContainerList>
                        <List width={'100%'} spacing={3}>
                            {products.map((product, index) => {
                                return (
                                    <>
                                        <ListItem key={index}>
                                            <C.ContainerRow>
                                                <Link to={"/product/" + product.id}>
                                                    {product.name}
                                                </Link>
                                                <TiDelete onClick={e => deleteProduct(product.id)} id={product.id} cursor={'pointer'} size={30} />
                                            </C.ContainerRow>
                                        </ListItem>
                                        <Divider />
                                    </>
                                )

                            })}
                        </List>
                    </C.ContainerList>
                </C.ContainerRow>
                <C.ContainerButton padding={'50px'}>
                    <Link to={'/registerProduct'}>
                        <Button width={'300px'} height={'50px'} bg="primary">CADASTRAR PRODUTO</Button>
                    </Link>
                </C.ContainerButton>
            </C.ContainerColumn>
        </React.Fragment >
    );
}