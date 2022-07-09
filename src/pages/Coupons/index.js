import React, { useEffect, useState } from 'react';
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

export default function Coupons() {

    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        api.get('coupons').then((response) => {
            let couponsData = response.data;
            setCoupons(couponsData);
        })
    }, [coupons]);

    const deleteCoupon = (idCoupon) => {
        console.log(idCoupon);
        api.delete('coupons/' + idCoupon);
    }

    return (
        <React.Fragment>
            <C.ContainerColumn>
                <C.Title>Cupons</C.Title>
                <C.ContainerRow>
                    <C.ContainerList>
                        <List width={'100%'} spacing={3}>
                            {coupons.map((coupon, index) => {
                                return (
                                    <>
                                        <ListItem key={index}>
                                            <C.ContainerRow>
                                                <Link to={"/coupon/" + coupon.id}>
                                                    {coupon.codCoupon}
                                                </Link>
                                                <TiDelete onClick={e => deleteCoupon(coupon.id)} id={coupon.id} cursor={'pointer'} size={30} />
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
                    <Link to={'/registerCoupon'}>
                        <Button width={'300px'} height={'50px'} bg="primary">CADASTRAR CUPOM</Button>
                    </Link>
                </C.ContainerButton>
            </C.ContainerColumn>
        </React.Fragment>
    );
}