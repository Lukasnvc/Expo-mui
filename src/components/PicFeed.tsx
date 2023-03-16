import { Box, Grid, LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { PixabayImage } from "../api/imageTypes";
import Post from "./Post";
import { ShowContext } from "../contexts/ShowContext";
import { VideoData } from "../api/videoTypes";
import { uniqBy } from "lodash";
import { useContext } from "react";
import { useImages } from "../hooks/image";
import { useVideos } from "../hooks/videos";

const Feed = () => {
  const { pick, page, setPage } = useContext(ShowContext);

  const [list, setList] = useState<PixabayImage[] | VideoData[]>([]);

  const { data: imageData, isLoading: isImageLoading } = useImages(page);
  const images = imageData || [];

  const { data: videoData, isLoading: isVideoLoading } = useVideos(page);
  const videos = videoData || [];

  const getItems = () => {
    if (pick === "videos" && !isVideoLoading) {
      return videos;
    }
    if (pick === "images" && !isImageLoading) {
      return images;
    }
    return [];
  };
  const x = getItems();

  useEffect(() => {
    console.log(page);

    setList(
      (prevList) =>
        uniqBy([...prevList, ...getItems()], (x) => x.id) as PixabayImage[] | VideoData[]
    );
  }, [images, videos]);

  // const { pick } = useContext(ShowContext);
  // const [page, setPage] = useState<number>(1);
  // const [list, setList] = useState<PixabayImage[] | VideoData[]>([]);

  // const { data: imageData, isLoading: isImageLoading } = useImages(page);
  // const images = imageData || [];

  // const { data: videoData, isLoading: isVideoLoading } = useVideos(page);
  // const videos = videoData || [];

  // const getItems = () => {
  //   if (pick === "videos" && !isVideoLoading) {
  //     setPage(1);
  //     return videos;
  //   }
  //   if (pick === "images" && !isImageLoading) {
  //     setPage(1);
  //     return images;
  //   }
  //   return [];
  // };
  // const items = getItems();
  // setList(items);

  // useEffect(() => {
  //   setList(
  //     (prevList) => uniqBy([...prevList, ...list], (x) => x.id) as PixabayImage[] | VideoData[]
  //   );
  // }, [list]);

  const fetchPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <Box flex={4}>
      <InfiniteScroll
        dataLength={list.length} //This is important field to render the next data
        next={fetchPage}
        hasMore={true}
        loader={<LinearProgress />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        {
          <Grid gap={4} alignItems="center" justifyContent="center" container>
            {x.map((image: any) => (
              <Grid item xs={12} md={5} key={image.id}>
                <Post
                  avatar={image.userImageURL}
                  pic={pick === "images" ? image.webformatURL : image.videos.tiny?.url}
                  tags={image.tags}
                  likes={image.likes}
                  author={image.user}
                />
              </Grid>
            ))}
          </Grid>
        }
      </InfiniteScroll>
    </Box>
  );
};

export default Feed;
