import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import { PropsWithChildren } from "react";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <Navbar />
      <Grid container>
        <Grid item xs={0} sm={3} md={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={9} md={8} sx={{ paddingX: "20px" }}>
          {children}
        </Grid>
        <Grid item sm={0} md={2}>
          <Rightbar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
