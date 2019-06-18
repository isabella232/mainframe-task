import styled from 'styled-components'
import { backgroundWhite, successColor } from 'theme'

const LinkButton = styled.a`
  background-color: transparent;
  border: 1px solid ${successColor};
  color: ${successColor};
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 16px;
  margin: 10px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 400ms ease-in-out;

  &:hover {
    background-color: ${successColor};
    color: ${backgroundWhite};
  }
`

export default LinkButton
