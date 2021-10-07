import "@fontsource/roboto"
import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { Provider } from "react-redux"
import generateStore from "redux/store"
import theme from "theme"
import App from "./App"
import "./index.css"

const store = generateStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
