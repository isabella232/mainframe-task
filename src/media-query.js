import { css } from 'styled-components'

export default function createMediaQueries (breakpoints) {
  const media = {}

  const onlySizes = {
    xs: [ null, breakpoints.sm - 1 ],
    sm: [ breakpoints.sm, breakpoints.md - 1 ],
    md: [ breakpoints.md, breakpoints.lg - 1 ],
    lg: [ breakpoints.lg, null ]
  }

  Object.keys(onlySizes).reduce((acc, size) => {
    const boundaries = onlySizes[size]
      .map((value, i) => {
        if (value) {
          return i === 0 ? `(min-width: ${value}px)` : `(max-width: ${value}px)`
        }

        return null
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
    xs: breakpoints.xs,
    sm: breakpoints.sm,
    md: breakpoints.md,
    lg: breakpoints.lg
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

  const downSizes = {
    xs: breakpoints.xs,
    sm: breakpoints.sm,
    md: breakpoints.md,
    lg: breakpoints.lg
  }

  Object.keys(downSizes).reduce((acc, size) => {
    const sizeName = `${size}Down`
    acc[sizeName] = (...args) => css`
    @media (max-width: ${downSizes[size]}px) {
      ${css(...args)}
    }
  `

    return acc
  }, media)

  return media
}
