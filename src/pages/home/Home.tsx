import Feed from "../../components/PicFeed";
import Rightbar from "../../components/Rightbar";
import Sidebar from "../../components/Sidebar";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Feed />
      <Rightbar />
    </Stack>
  );
};

export default Home;
