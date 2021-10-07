import { createTheme } from "@mui/material/styles"
import { lightPalette, darkPalette } from "./palette"
import typography from "theme/typography"
import breakpoints from "theme/breakpoints"

export const lightTheme = createTheme({
  palette: lightPalette,
  typography,
  breakpoints
})

export const darkTheme = createTheme({
  palette: darkPalette,
  typography,
  breakpoints
})

export default lightTheme
