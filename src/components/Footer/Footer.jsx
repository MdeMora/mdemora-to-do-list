import React from "react"
import { FOOTER_HEIGHT } from "constants/ui"
import { Box, Typography, useTheme } from "@mui/material"

const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      height={FOOTER_HEIGHT}
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
