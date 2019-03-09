import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { backgroundWhite, textPrimaryColor } from 'theme'
import { Container, LinkButton, Navbar } from 'components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: ${backgroundWhite};
    color: ${textPrimaryColor};
  }
`

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Navbar />
        <Container>
          <LinkButton href='/#get-started'>
              Get started
          </LinkButton>
        </Container>
      </>
    )
  }
}

export default App;
