import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(()=> {
    const div = messagesRef.current;

    if(div !== null && div !== undefined ) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
   <Container> 
    <Messages ref={messagesRef}>
    
    {Array.from(Array(15).keys()).map((n)=> (
       <ChannelMessage 
       author= "Anonymous"
       date="22/12/2020"
       content="Vo traza seu zap!"
     />
    ))}
    
      <ChannelMessage 
        author= "GiganteAnao3"
        date="22/12/2020"
        content="Hoje é meu aniversário!"
      />

      <ChannelMessage 
        author= "Oubinha"
        date= "23/12/2020"
        content={
          <>
            <Mention>@GiganteAnao3</Mention>, pf me carrega no lol? Preciso sair do prata
          </>
        }
        hasMention
        isBot
      /> 
    </Messages>

    <InputWrapper>
      <Input type="text" placeholder="conversar em #chat-livre"/>
      <InputIcon />
    </InputWrapper>

   </Container>
  );
}

export default ChannelData;