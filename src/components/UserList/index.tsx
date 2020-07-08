import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
}) => {
  return(
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
}

const UserList: React.FC = () => {
  return (
   <Container> 
    <Role>Disponível - 1</Role>
    <UserRow nickname="GiganteAnao3"/>

    <Role>Offline - 23</Role>
    <UserRow nickname="Oubinha" isBot/>
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
    <UserRow nickname="Random" />
   </Container>
  );
}

export default UserList;