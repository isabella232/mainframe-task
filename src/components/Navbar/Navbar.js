import React from 'react'
import styled from 'styled-components'
import { backgroundPrimary, media, white } from 'theme'
import { Container } from 'components'

const Nav = styled.nav`
  background-color: ${backgroundPrimary};
  color: ${white};
  font-size: 1.8rem;

  h1 {
    font-weight: normal;
    margin: 0;
  }

  > div {
    display: flex;
    align-items: baseline; 
    flex-direction: column;
    justify-content: space-between;
    ${media.sm`flex-direction: row;`}
  }
`

const NavbarMenu = styled.ul`
  font-weight: bold;
  list-style: none;
  margin: 0;
  padding: 14px 0;

  li {
    display: inline-block;
  }

  li:nth-child(n+2) {
    margin-left: 20px;
  }

  a {
    color: ${white};
    text-decoration: none;
  }
`

const Navbar = () => (
  <Nav>
    <Container>
      <h1>erebos</h1>

      <NavbarMenu>
        <li>
          <a href='/#'>Docs</a>
        </li>
        <li>
          <a href='/#'>API</a>
        </li>
        <li>
          <a href='/#'>Help</a>
        </li>
        <li>
          <a href='/#'>Github</a>
        </li>
      </NavbarMenu>
    </Container>
  </Nav>
)

export default Navbar