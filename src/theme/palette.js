// @MdeMora: This is the skeleton to create a personalized theme with Material UI

import { white, black, green, red, beige } from "./colors"

const THEME_TYPES = {
  DARK: "dark",
  LIGHT: "light"
}

export const darkPalette = {
  type: THEME_TYPES.DARK,
  white,
  black,
  ...green,
  ...red,
  ...beige
}

export const lightPalette = {
  type: THEME_TYPES.LIGHT,
  primary: {
    contrastText: black,
    dark: green.green700,
    main: green.green700,
    light: green.green500
  },
  secondary: {
    contrastText: black,
    dark: red.red500,
    main: red.red500,
    light: beige.beige700
  },
  text: {
    primary: black,
    secondary: "rgba(0,0,0,0.6)",
    link: green.green700
  },
  background: {
    default: beige.beige300
  },
  white,
  black,
  ...green,
  ...beige,
  ...red
}
