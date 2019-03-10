import React from 'react'
import styled from 'styled-components'
import { 
  backgroundPrimary, 
  media,
  textSecondaryColor, 
  white 
} from 'theme'
import { Container } from 'components'
import logo from 'assets/mainframe-logo.png'

const FooterInner = styled.footer`
  background-color: ${backgroundPrimary};
  color: ${white};
  font-size: 1.6rem;
  font-weight: bold;
  padding: 40px 0;

  > div {
    display: flex;
    flex-direction: column;
    ${media.smUp`
      flex-direction: row;
      justify-content: space-around;
    `}
  }

  p {
    color: ${white};
    margin: 0 0 15px 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0 0 15px 0;
  }

  li a {
    color: ${textSecondaryColor};
    text-decoration: none;
  }
`

const Logo = styled.img`
  display: block;
  margin: 20px auto 0 auto;
  max-width: 150px;
`

const Footer = () => (
  <FooterInner>
    <Container>
      <div>
        <p>Docs</p>
        <ul>
          <li><a href='/#'>Getting Started</a></li>
          <li><a href='/#'>API Reference</a></li>
          <li><a href='/#'>CLI</a></li>
        </ul>
      </div>

      <div>
        <p>Community</p>
        <ul>
          <li><a href='/#'>Gitter Chat</a></li>
          <li><a href='/#'>Github Repository</a></li>
          <li><a href='/#'>Star</a></li>
        </ul>
      </div>

      <div>
        <p>Swarm</p>
        <ul>
          <li><a href='/#'>Official Documentation</a></li>
          <li><a href='/#'>HTTP Gateway</a></li>
          <li><a href='/#'>Gitter Chat</a></li>
        </ul>
      </div>
    </Container>

    <a href='https://mainframe.com'>
      <Logo src={logo} alt='Mainframe logo' />
    </a>
  </FooterInner>
)

export default Footer