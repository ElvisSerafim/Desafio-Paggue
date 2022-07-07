import React from 'react';
import { Container } from './styles';

export default function SideBarItem({Icon, Text}){
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  );
}