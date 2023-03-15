import { Box } from "@mui/system"
import Navbar from "../components/Navbar"
import { PropsWithChildren } from "react"

const MainLayout = ({children}: PropsWithChildren) => {
  return (
    <Box
    >
      <Navbar/>
      {children}</Box>
  )
}

export default MainLayout
