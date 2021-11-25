import React from 'react';
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled.jsx';
import { Container } from './styles/Container.styled.jsx';
import { Flex } from './styles/Flex.styled.jsx';
import { Button } from './styles/Button.styled.jsx';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./public/images/logo.svg' alt='Huddle Logo' />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
