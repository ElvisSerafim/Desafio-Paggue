import React, { useState, useContext } from 'react';
import {
    Input,
    Stack,
    Button
} from '@chakra-ui/react';
import * as C from '../../styles/styles';
import { api } from '../../services/api';
import AuthContext from '../../contexts/auth';

export default function RegisterCoupon() {

    const [codCoupon, setCodCoupon] = useState('');
    const [quantity, setQuantity] = useState(0);
    const context = useContext(AuthContext);
    const currentUser = JSON.parse(context.getUser());

    const createCoupon = () => {

        setCodCoupon('');
        setQuantity(0);

        const coupon = {
            codCoupon: codCoupon,
            quantity: quantity,
            id: Math.floor(Math.random * 100000000),
            user_id: currentUser.id.toString()

        }

        api.post('coupons/', coupon);
    }

    return (
        <React.Fragment>
            <C.ContainerColumn>
                <C.Title>Registrar Cupom</C.Title>
                <C.ContainerRow>
                    <C.ContainerRegisterFields>
                        <Stack spacing={5}>
                            <C.DivInput>
                                <C.TextInput>Código do Cupom</C.TextInput>
                                <Input
                                    height={50}
                                    onChange={e => setCodCoupon(e.target.value)}
                                />
                            </C.DivInput>
                        </Stack>

                    </C.ContainerRegisterFields>
                    <C.ContainerRegisterFields>
                        <Stack spacing={5}>
                            <C.DivInput>
                                <C.TextInput>Quantidade</C.TextInput>
                                <Input
                                    height={50}
                                    type={'number'}
                                    onChange={e => setQuantity(e.target.value)}

                                />
                            </C.DivInput>

                        </Stack>
                    </C.ContainerRegisterFields>
                </C.ContainerRow>
                <C.ContainerButtonRegister padding={'200px'}>
                    <Button onClick={createCoupon} width={'300px'} height={'50px'} bg="primary">CADASTRAR</Button>
                </C.ContainerButtonRegister>
            </C.ContainerColumn>
        </React.Fragment>
    );
}