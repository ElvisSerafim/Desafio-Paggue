import React, { useEffect, useState, useContext } from 'react';
import {
    Input,
    Stack,
    Button
} from '@chakra-ui/react';
import * as C from '../../styles/styles';

import { useParams } from 'react-router';
import { api } from '../../services/api';
import AuthContext from '../../contexts/auth';


export default function Coupon() {

    const { id } = useParams();
    const [codCoupon, setCodCoupon] = useState('');
    const [quantity, setQuantity] = useState(0);

    const context = useContext(AuthContext);
    const currentUser = JSON.parse(context.getUser());

    useEffect(() => {
        const getCoupons = () => {
            api.get('coupons').then((response) => {
                let couponsData = response.data;
                couponsData.map((coupon, index) => {
                    if (id === coupon.id) {
                        setCodCoupon(coupon.codCoupon);
                        setQuantity(coupon.quantity);
                    }
                })
                return;
            });
        }

        getCoupons();
    }, [id]);


    const updateCoupon = () => {


        const couponUpdated = {
            codCoupon: codCoupon,
            quantity: quantity,
            user_id:currentUser.id.toString()
        }

        api.put('coupons/' + id, couponUpdated);
    }

    return (
        <React.Fragment>
            <C.ContainerColumn >
                <C.Title>Cupom</C.Title>
                <C.ContainerRow>
                    <C.ContainerRegisterFields>
                        <Stack spacing={5}>
                            <C.DivInput>
                                <C.TextInput>Código do Cupom</C.TextInput>
                                <Input
                                    width={400}
                                    height={50}
                                    value={codCoupon}
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
                                    width={400}
                                    height={50}
                                    name='password'
                                    type={'number'}
                                    value={quantity}
                                    onChange={e => setQuantity(e.target.value)}
                                />
                            </C.DivInput>
                        </Stack>
                    </C.ContainerRegisterFields>
                </C.ContainerRow>
                <C.ContainerButtonRegister padding={'100px'}>
                    <Button onClick={updateCoupon} width={'300px'} height={'50px'} bg="primary">SALVAR</Button>
                </C.ContainerButtonRegister>
            </C.ContainerColumn>
        </React.Fragment>
    );
}