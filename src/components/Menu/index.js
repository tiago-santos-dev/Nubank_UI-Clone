import React from 'react';

import {
  Container,
  Code,
  Img,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';
import QRcode from '~/assets/qrcode.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <Img source={QRcode} />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar Cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do App</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
