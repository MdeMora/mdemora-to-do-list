import { useTheme } from "@mui/material/styles"

import useMuiMediaQuery from "@mui/material/useMediaQuery"

const useMediaQuery = () => {
  const theme = useTheme()

  const isMobileScreen = useMuiMediaQuery(theme.breakpoints.down("md"))

  const isDesktopScreen = !isMobileScreen

  const isBigScreen = useMuiMediaQuery(theme.breakpoints.up("lg"))

  return {
    isMobileScreen,
    isDesktopScreen,
    isBigScreen
  }
}

export default useMediaQuery
