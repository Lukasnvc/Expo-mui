import { CircularProgress, Stack, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { LocalUser } from "../../assets/consts";
import Post from "../../components/Post";
import { useRandomImage } from "../../hooks/image";

const Home = () => {
  const userObjectString = localStorage.getItem("user");
  const userObject: LocalUser | null = userObjectString ? JSON.parse(userObjectString) : null;
  const { data, isLoading } = useRandomImage();
  const images = data || [];

  return (
    <Stack spacing={4} justifyContent="center" alignItems="stretch" sx={{ marginTop: "30px" }}>
      <Typography variant="h5" align="center">
        Welcome back {userObject?.first_name} {userObject?.last_name}
      </Typography>
      <Typography variant="subtitle1" align="center">
        TODAYS PICK
      </Typography>
      {!isLoading ? (
        <Post
          avatar={images[0].userImageURL}
          pic={images[0].webformatURL}
          tags={images[0].tags}
          likes={images[0].likes}
          author={images[0].user}
          id={images[0].id}
        />
      ) : (
        <CircularProgress sx={{ height: "500px", width: "500px" }} />
      )}
    </Stack>
  );
};

export default Home;
