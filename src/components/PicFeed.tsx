import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

import Post from './Post'
import { ShowContext } from '../contexts/ShowContext'
import { useContext } from 'react'
import { useImages } from '../hooks/image'
import { useVideos } from '../hooks/videos'

const Feed = () => {
  const { pick } = useContext(ShowContext)
  const [items, setItems] = useState<any>([])
  const { data: imageData, isLoading: isImageLoading } = useImages();
  const images = imageData || [];

  const { data:videoData, isLoading: isVideoLoading } = useVideos();
  const videos = videoData || []
  
  useEffect(() => {
    if (pick === 'videos') {
      if (!isVideoLoading) {
        setItems(videos)
      }
    } 
    if (pick === 'images') {
      if (!isImageLoading) {
        setItems(images)
      }
    
    }
  }, [pick, isImageLoading, isVideoLoading ])
  

  return (
    <Grid
      flex={4}
      p={2}
      gap={2}
      alignItems='center'
      justifyContent='center'
      container
    >
      {items.map((image:any) => (
        <Grid
          item
          xs={12}
          md={5}
          key={image.id}
        >
          <Post avatar={image.userImageURL} pic={pick === 'images' ?   image.webformatURL  :  image.videos.tiny?.url } tags={image.tags} likes={image.likes} author={image.user} />
          </Grid>
      ))}
      
    </Grid>
  )
}

export default Feed