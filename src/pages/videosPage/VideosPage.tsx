import { Box, Grid, LinearProgress } from "@mui/material";

import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../../components/Post";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";
import { useState } from "react";
import { useVideos } from "../../hooks/videos";

const VideosPage = () => {
  const [page, setPage] = useState(1);
  const { data: searchData } = useContext(SearchContext);
  const search = searchData || [];

  const { data: videoData, isLoading: isVideoLoading } = useVideos(page);
  const videos = videoData || [];

  const fetchPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <Box marginTop="30px">
      <InfiniteScroll
        dataLength={videos.length} //This is important field to render the next data
        next={fetchPage}
        hasMore={true}
        loader={<LinearProgress />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        {search.length > 0 ? (
          <Grid gap={4} alignItems="center" justifyContent="center" container>
            {search.length > 1 &&
              search.map((image: any) => (
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
        ) : (
          <Grid gap={4} alignItems="center" justifyContent="center" container>
            {videos.map((video: any) => (
              <Grid item xs={12} md={5} key={video.id}>
                <Post
                  avatar={video.userImageURL}
                  pic={video.videos.tiny?.url}
                  tags={video.tags}
                  likes={video.likes}
                  author={video.user}
                  id={video.id}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </InfiniteScroll>
    </Box>
  );
};

export default VideosPage;
