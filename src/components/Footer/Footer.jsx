import React from "react"
import UI from "constants/ui"
import { Box, Typography, useTheme } from "@mui/material"

const Footer = () => {
  console.log(UI)
  const theme = useTheme()
  return (
    <Box
      height={UI.sizes.footerHeight}
      backgroundColor={theme.palette.primary.main}
      display="flex"
      alignItems="center"
      color={theme.palette.white}
    >
      <Box ml={2} />
      <Typography>Developed by MdeMora</Typography>
    </Box>
  )
}

export default Footer
