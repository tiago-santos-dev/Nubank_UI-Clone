import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>

          <CardContent>
            <Title>Saldo Disponivel</Title>
            <Description>R$ 198.955,80</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 500,00 recebida hoje às 17:22h.
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
