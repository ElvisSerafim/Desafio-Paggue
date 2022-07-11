import React, { useState, useEffect, useContext } from 'react';
import {
    Input,
    Stack,
    FormControl,
    FormLabel,
    Select,
    InputGroup,
    Button
} from '@chakra-ui/react';
import * as C from '../../styles/styles';
import { api } from '../../services/api';
import AuthContext from '../../contexts/auth';

export default function Store() {

    const [quantity, setQuantity] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [color, setColor] = useState('');
    const [colors, setColors] = useState([]);
    const context = useContext(AuthContext);
    const currentUser = JSON.parse(context.getUser());

    useEffect(() => {
        
        const getStore = () => {
            api.get('store').then((response => {
                let storeData = response.data;
                storeData.map((stor) => {
                    if(stor.id === currentUser.id){
                        setQuantity(stor.minimum_amount);
                        setDiscount(stor.discount);
                        setColor(stor.background);
                    }
                })
            }));
        }
        
        const getColors = () => {
            api.get('colors').then((response => {
                let colors = response.data;
                setColors(colors);
            }));
        }

        getStore();
        getColors();
    }, []);

    const updateStore = () => {

        const store = {
            minimum_amount: quantity,
            discount: discount,
            background: color,
            user_id:currentUser.id.toString()
        }

        api.put('store/' + currentUser.id, store);
        context.setColor(color);
    }

    return (
        <React.Fragment>
            <C.ContainerColumn>
                <C.Title>Loja</C.Title>
                <C.ContainerRow>
                    <C.ContainerRegisterFields>
                        <Stack spacing={5}>
                            <C.DivInput>
                                <FormControl>
                                    <FormLabel htmlFor='category'>Background</FormLabel>
                                    <Select value={color} onChange={e => setColor(e.target.value)} id='category' placeholder='Selecione uma cor'>
                                        {colors.map((col, index) => {
                                            return (
                                                <option > {col.color} </option>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </C.DivInput>

                            <C.DivInput>
                                <C.TextInput>Quantidade mínima</C.TextInput>
                                <InputGroup>
                                    <Input value={quantity} onChange={e => setQuantity(e.target.value)} type={'number'} />
                                </InputGroup>
                            </C.DivInput>

                        </Stack>

                    </C.ContainerRegisterFields>
                    <C.ContainerRegisterFields>
                        <Stack spacing={5}>
                            <C.DivInput>
                                <C.TextInput>Desconto em %</C.TextInput>
                                <Input
                                    
                                    height={50}
                                    type={'number'}
                                    onChange={e => setDiscount(e.target.value)}
                                    value={discount}
                                />
                            </C.DivInput>

                        </Stack>
                    </C.ContainerRegisterFields>
                </C.ContainerRow>
                <C.ContainerButtonRegister padding={'100px'}>
                    <Button onClick={updateStore}  width={'300px'} height={'50px'} bg="primary">SALVAR</Button>
                </C.ContainerButtonRegister>
            </C.ContainerColumn>
        </React.Fragment>
    );
}