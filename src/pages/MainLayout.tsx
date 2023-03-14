import { Box } from "@mui/system"
import { PropsWithChildren } from "react"

const MainLayout = ({children}: PropsWithChildren) => {
  return (
    <Box
    >{children}</Box>
  )
}

export default MainLayout
