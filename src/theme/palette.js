// @MdeMora: This is the skeleton to create a personalized theme with Material UI

import { white, black, blue, green, yellow, orange, purple } from "./colors"

const THEME_TYPES = {
  DARK: "dark",
  LIGHT: "light"
}

export const darkPalette = {
  type: THEME_TYPES.DARK,
  white,
  black,
  ...blue,
  ...green,
  ...yellow,
  ...orange,
  ...purple
}

export const lightPalette = {
  type: THEME_TYPES.LIGHT,
  // primary: {
  //   contrastText: black,
  //   dark: blue.blue300,
  //   main: blue.blue500,
  //   light: blue.blue700
  // },
  // secondary: {
  //   contrastText: black,
  //   dark: green.green700,
  //   main: green.green500,
  //   light: green.green300
  // },
  text: {
    primary: purple.purple500
    // secondary: "rgba(0,0,0,0.6)",
    // link: green.green500
  },
  // background: {
  //   default: purple.purple500,
  //   paper: purple.purple700
  // },
  white,
  black,
  ...blue,
  ...green,
  ...yellow,
  ...orange,
  ...purple
}
