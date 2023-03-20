import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { LocalUser } from "../assets/consts";
import Post from "./Post";
import { SearchContext } from "../contexts/SearchContext";
import { useImageById } from "../hooks/image";

const Rightbar = () => {
  const [itemId, setItemId] = useState("");
  const userObjectString = localStorage.getItem("user");
  const userObject: LocalUser | null = userObjectString ? JSON.parse(userObjectString) : null;
  const likesArray = userObject?.likes || [];

  const { data, isLoading } = useImageById(itemId);

  // useEffect(() => {
  likesArray.map((id) => {
    console.log(id);
  });
  // }, []);

  console.log();
  return (
    <Box sx={{ display: { sm: "none", md: "block" } }}>
      <Box position="fixed">
        {/* <Box position="fixed">
        {search.length > 0 && (
          <Grid gap={4} alignItems="center" justifyContent="center" container>
            {search.map((image: any) => (
              <Grid item xs={12} md={5} key={image.id}>
                <Post
                  avatar={image.userImageURL}
                  pic={image.webformatURL}
                  tags={image.tags}
                  likes={image.likes}
                  author={image.user}
                  id={image.id}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box> */}
        <Typography>Sidebar</Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
