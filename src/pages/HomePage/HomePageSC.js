export const ctm = ({ theme }) => ({
  ...theme.typography.h4,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.beige300,
  textTransform: "capitalize",
  ":hover": {
    color: theme.palette.primary.main,
  },
})

export const todoSVG = () => ({
  position: "absolute",
  width: "calc(100vw / 1.4 - 390px)",
  right: 0,
})
