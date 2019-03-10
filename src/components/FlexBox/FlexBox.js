import styled from 'styled-components'
import { media } from 'theme'

const FlexBox = styled.div`
  display: ${props => props.inline ? 'inline-flex' : 'flex'};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
`

FlexBox.defaultProps = {
  direction: 'row',
  inline: false,
  justify: 'start',
}

export default FlexBox