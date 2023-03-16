import { Box, ThemeProvider, createTheme } from "@mui/material"

import AllRoutes from "./routes/AllRoutes"
import { ShowContext } from "./contexts/ShowContext"
import { useContext } from "react"

type PaletteMode = 'light' | 'dark';

function App() {
  const {color} = useContext(ShowContext)
  const darkTheme = createTheme({
    palette: {
    mode: color as PaletteMode
  }
})
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={'text.primary'}>
      <AllRoutes/>
      </Box>
    </ThemeProvider>
  )
}

export default App
