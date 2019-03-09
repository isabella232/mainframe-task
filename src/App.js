import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { backgroundWhite, textPrimaryColor } from 'theme'
import { LinkButton } from 'components'

const GlobalStyles = createGlobalStyle`
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
        <LinkButton href='/#get-started'>
          Get started
        </LinkButton>
      </>
    )
  }
}

export default App;
