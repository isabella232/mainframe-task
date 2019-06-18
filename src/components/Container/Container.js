import styled from 'styled-components'
import { media } from 'theme'

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  ${media.xsUp`max-width: 540px;`}
  ${media.smUp`max-width: 720px;`}
  ${media.mdUp`max-width: 960px;`}
  ${media.lgUp`max-width: 1140px;`}
`

export default Container
