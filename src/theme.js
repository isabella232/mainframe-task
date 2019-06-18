import createMediaQueries from './media-query'

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

export const media = createMediaQueries(sizes)
