import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { backgroundGrey, backgroundWhite, textPrimaryColor, textSuccessColor } from 'theme'

import {
  Container, FlexBox, Footer, LinkButton, Navbar,
  Panel, PanelIcon
} from 'components'

import documents from 'assets/documents.png'
import erebos from 'assets/erebos-logo.png'
import gears from 'assets/gears.png'
import graph from 'assets/graph.png'

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

  h1 {
    font-size: 4.8rem;
    font-weight: normal;
    margin: 0;
  }

  h2 {
    font-size: 2.2rem;
    margin: 0;
  }

  p {
    font-size: 1.6rem;
  }

  a, .text-success {
    color: ${textSuccessColor}
  }

  .bg-grey {
    background-color: ${backgroundGrey};
  }
`

const Logo = styled.img`
  margin: 20px auto;
  width: 80px;
`

class App extends React.Component {
  render () {
    return (
      <>
        <GlobalStyles />
        <Navbar />

        <Container>
          <Panel>
            <FlexBox direction='column' justify='center'>
              <Logo src={erebos} alt='Erebos logo' />

              <h1>erebos</h1>

              <p className='text-success'>
                JavaScript client and CLI for Swarm v0.3.8
              </p>

              <FlexBox justify='center'>
                <LinkButton href='/#'>Get Started</LinkButton>
                <LinkButton href='/#'>See Examples</LinkButton>
              </FlexBox>
            </FlexBox>
          </Panel>
        </Container>

        <div className='bg-grey'>
          <Container>
            <FlexBox xs={{ direction: 'column' }}>
              <Panel>
                <PanelIcon src={documents} alt='Document icon' />
                <h2>Decentralized file storage</h2>
                <p>Securely distribute you files accross the entire network using the <a href='/#'>Bzz APIs</a></p>
              </Panel>

              <Panel>
                <PanelIcon src={graph} alt='Graph icon' />
                <h2>Peer-to-peer communications</h2>
                <p>Encrypted communications between nodes with no dedicated servers required using the <a href='/#'>Pss APIs</a></p>
              </Panel>
            </FlexBox>
          </Container>
        </div>

        <Container>
          <FlexBox>
            <Panel>
              <PanelIcon src={gears} alt='Gears icon' />
              <h2>Your entrypoint into decentralized apps development</h2>
              <p>Swarm is a distributed storage platform and content distribution network, a native base layer service of the Etherium web3 stack.</p>
              <LinkButton href='/#'>Read the full Introduction</LinkButton>
            </Panel>
          </FlexBox>
        </Container>

        <Footer />
      </>
    )
  }
}

export default App
