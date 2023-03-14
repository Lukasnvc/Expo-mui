import { Box, Grid } from '@mui/material'

import Post from './Post'
import React from 'react'
import { useImages } from '../hooks/image'

const Feed = () => {
  const { data } = useImages();
  const images = data || [];
  console.log(images)
  return (
    <Grid
      flex={4}
      p={2}
      gap={2}
      alignItems='center'
      justifyContent='center'
      container
    >
      {images.map((image) => (
        <Grid
          item
          xs={12}
          md={5}
        >
          <Post key={image.id} pic={image.webformatURL} tags={image.tags} likes={image.likes} author={image.user} />
          </Grid>
      ))}
      
    </Grid>
  )
}

export default Feed