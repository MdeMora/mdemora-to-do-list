//@MdeMora This is the skeleton to create a personalized typography theme. Roboto is recommended by Material UI
export const headerFontFamily = ["Merriweather", "sans-serif"].join()
export const fontFamily = ["Montserrat", "sans-serif"].join()

const typography = {
  fontFamily,
  h1: {
    fontFamily: headerFontFamily,
    fontSize: 96,
    "@media (max-width:900px)": {
      fontSize: 32
    }
  },
  h2: {
    fontFamily: headerFontFamily,
    fontSize: 72,
    fontWeight: "bold",
    "@media (max-width:900px)": {
      fontSize: 30
    }
  },
  h3: {
    fontFamily: headerFontFamily,
    fontSize: 64,
    fontWeight: "bold",
    "@media (max-width:900px)": {
      fontSize: 28
    }
  },
  h4: {
    fontFamily: headerFontFamily,
    fontSize: 48,
    fontWeight: "bold",
    "@media (max-width:900px)": {
      fontSize: 26
    }
  },
  h5: {
    fontFamily: headerFontFamily,
    fontSize: 36,
    fontWeight: "bold",
    "@media (max-width:900px)": {
      fontSize: 24
    }
  },
  h6: {
    fontFamily: headerFontFamily,
    fontSize: 24,
    fontWeight: "bold",
    "@media (max-width:900px)": {
      fontSize: 22
    }
  },
  subtitle1: {
    fontFamily: headerFontFamily,
    fontSize: 20,
    fontWeight: "bold"
  },
  subtitle2: {
    fontFamily: fontFamily,
    fontSize: 20
  },
  body1: {
    fontFamily,
    fontSize: 16
  },
  body2: {
    fontFamily,
    fontSize: 16,
    fontWeight: "bold"
  },
  button: {
    fontFamily: headerFontFamily,
    fontWeight: "bold"
  },
  caption: {
    fontFamily: fontFamily,
    fontSize: 12,
    textTransform: "uppercase"
  },
  overline: {
    fontFamily: fontFamily,
    fontSize: 12,
    lineHeight: "18px"
  }
}

export default typography
