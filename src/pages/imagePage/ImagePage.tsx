import { Box, Grid, LinearProgress } from "@mui/material";

import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../../components/Post";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";
import { useImages } from "../../hooks/image";
import { useState } from "react";

const ImagePage = () => {
  const [page, setPage] = useState(1);
  const { data: searchData } = useContext(SearchContext);
  const search = searchData || [];

  const { data: imageData, isLoading: isImageLoading } = useImages(page);
  const images = imageData || [];

  const fetchPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <Box marginTop="30px">
      <InfiniteScroll
        dataLength={images.length} //This is important field to render the next data
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
            {images.map((image: any) => (
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
      </InfiniteScroll>
    </Box>
  );
};

export default ImagePage;
