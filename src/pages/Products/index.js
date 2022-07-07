import React, { } from 'react';
import * as C from '../../styles/styles';
import {
    Button,
    List,
    ListItem,
    Divider
} from '@chakra-ui/react';

import { TiDelete } from 'react-icons/ti';

export default function Products() {

    return (
        <React.Fragment>
            <C.ContainerColumn userLogged={true}>
                <C.Title>Produtos</C.Title>
                <C.ContainerRow>
                    <C.ContainerList>
                        <List width={'100%'} spacing={3}>
                            <ListItem>
                                <C.ContainerRow>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                    <TiDelete cursor={'pointer'} size={30} />
                                </C.ContainerRow>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <C.ContainerRow>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                    <TiDelete cursor={'pointer'} size={30} />
                                </C.ContainerRow>
                            </ListItem>
                        </List>
                    </C.ContainerList>
                </C.ContainerRow>
                <C.ContainerButton padding={'200px'}>
                    <Button width={'300px'} height={'50px'} bg="primary">CADASTRAR PRODUTO</Button>
                </C.ContainerButton>
            </C.ContainerColumn>
        </React.Fragment>
    );
}