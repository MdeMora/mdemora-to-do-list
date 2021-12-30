import React from "react"
import { FOOTER_HEIGHT } from "constants/ui"
import { Box, Typography, useTheme } from "@mui/material"
import styled from "@emotion/styled"

const Footer = () => {
  const theme = useTheme()

  const LinkedInLink = styled("a")(() => ({ color: "white", fontSize: 12 }))
  return (
    <Box
      minHeight={FOOTER_HEIGHT}
      backgroundColor={theme.palette.primary.main}
      display="flex"
      alignItems="center"
      color={theme.palette.white}
    >
      <Box ml={2} />
      <Typography fontSize={12}>
        Developed by{" "}
        <LinkedInLink
          href="https://www.linkedin.com/in/mdemora/"
          rel="noreferrer"
          target="_blank"
        >
          MdeMora
        </LinkedInLink>
      </Typography>
    </Box>
  )
}

export default Footer
