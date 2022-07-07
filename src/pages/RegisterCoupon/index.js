import React, { } from 'react';
import {
    Input,
    Stack,
    Button
} from '@chakra-ui/react';
import * as C from '../../styles/styles';

export default function RegisterCoupon() {

    return (
        <React.Fragment>
            <C.ContainerColumn userLogged={true}>
                <C.ContainerRow>
                    <C.ContainerRegisterFields>
                        <Stack spacing={5}>
                            <C.DivInput>
                                <C.TextInput>Código do Cupom</C.TextInput>
                                <Input
                                    width={400}
                                    height={50}

                                />
                            </C.DivInput>
                        </Stack>

                    </C.ContainerRegisterFields>
                    <C.ContainerRegisterFields>
                        <Stack spacing={5}>
                            <C.DivInput>
                                <C.TextInput>Validade</C.TextInput>
                                <Input
                                    width={400}
                                    height={50}
                                    name='password'
                                    type={'date'}
                                />
                            </C.DivInput>

                        </Stack>
                    </C.ContainerRegisterFields>
                </C.ContainerRow>
                <C.ContainerButtonRegister padding={'200px'}>
                    <Button width={'300px'} height={'50px'} bg="primary">CADASTRAR</Button>
                </C.ContainerButtonRegister>
            </C.ContainerColumn>
        </React.Fragment>
    );
}