import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';

import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TouchableOpacity>
          <TabItem>
            <Icon name="person-add" size={24} color="#FFF" />
            <TabText>Indicar amigos</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <TabItem>
            <Icon name="chat-bubble-outline" size={24} color="#FFF" />
            <TabText>Cobrar</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <TabItem>
            <Icon name="arrow-downward" size={24} color="#FFF" />
            <TabText>Depositar</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <TabItem>
            <Icon name="arrow-upward" size={24} color="#FFF" />
            <TabText>Transferir</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <TabItem>
            <Icon name="lock" size={24} color="#FFF" />
            <TabText>Bloquear cartão</TabText>
          </TabItem>
        </TouchableOpacity>
      </TabsContainer>
    </Container>
  );
}
