import React, { } from 'react';
import {
    Input,
    Button
} from '@chakra-ui/react';
import * as C from '../../styles/styles';

export default function RegisterCategory() {

    return (
        <React.Fragment>
            <C.ContainerColumn userLogged={true}>
                <C.ContainerRow>
                    <C.ContainerRowCategory>
                        <C.DivInput>
                            <C.TextInput>Nome da Categoria</C.TextInput>
                            <Input
                                width={400}
                                height={50}
                            />
                        </C.DivInput>
                    </C.ContainerRowCategory>
                </C.ContainerRow>
                <C.ContainerButtonRegister padding={'200px'}>
                    <Button
                        width={'300px'}
                        height={'50px'}
                        bg="primary"
                    >
                        CADASTRAR
                    </Button>
                </C.ContainerButtonRegister>
            </C.ContainerColumn>
        </React.Fragment>
    );
}