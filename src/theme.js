import { css } from 'styled-components'

export const primaryColor = '#142543'
export const successColor = '#00a7e7'

export const backgroundWhite = '#fff'
export const backgroundGrey = '#f7f7f7'

export const textPrimaryColor = '#232323'
export const textSecondaryColor = '#8992a1'

const sizes = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200
}

export const media = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = (...args) => css`
    @media (min-width: ${sizes[size]}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})