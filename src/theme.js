import { css } from 'styled-components'

export const primaryColor = '#142543'
export const successColor = '#00a7e7'
export const white = '#fff'

export const backgroundWhite = white
export const backgroundPrimary = primaryColor
export const backgroundGrey = '#f7f7f7'

export const textPrimaryColor = '#232323'
export const textSecondaryColor = '#8992a1'
export const textSuccessColor = successColor

export const sizes = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200
}

export const media = {}

const onlySizes = {
  xs: [ null, sizes.sm - 1 ],
  sm: [ sizes.sm, sizes.md - 1 ],
  md: [ sizes.md, sizes.lg - 1 ],
  lg: [ sizes.lg, null ]
}

Object.keys(onlySizes).reduce((acc, size) => {  
  const boundaries = onlySizes[size]
    .map((value, i) => {
      if (value) {
        return i === 0 ? `(min-width: ${value}px)` : `(max-width: ${value}px)`
      }
    })
    .filter(value => typeof value === 'string')
    .join(' and ')

  acc[size] = (...args) => css`
    @media ${boundaries} {
      ${css(...args)}
    }
  `

  return acc
}, media)

const upSizes = {
  xs: sizes.xs,
  sm: sizes.sm,
  md: sizes.md,
  lg: sizes.lg
}

Object.keys(upSizes).reduce((acc, size) => {
  const sizeName = `${size}Up`
  acc[sizeName] = (...args) => css`
    @media (min-width: ${upSizes[size]}px) {
      ${css(...args)}
    }
  `

  return acc
}, media)
