import { Box, CircularProgress, Grid, LinearProgress, Typography } from '@mui/material';
import React, { PropsWithChildren, ReactNode } from 'react'

import { useRandomImage } from '../hooks/image';

const AuthLayout = ({ children }: PropsWithChildren) => {
  
  const { data, isLoading } = useRandomImage();
  const images = data || [];
  console.log(images)
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      height='100vh'
      position='relative'
    >
      {!isLoading ? <img src={images[0].largeImageURL} alt="random image" style={{position: 'absolute', width: '100vw', height: '100vh', objectFit: 'fill', zIndex: '1'}}/> : 
      <LinearProgress sx={{width: '80%', margin: '0 auto'}} />
        }
      <Grid
        item
        xs={12}
        md={7}
      >
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        px={2}
        sx={{zIndex:'10'}}
      >
        {children}
      </Grid>
      <Grid
        item
        xs={1}>
      </Grid>
    </Grid>
  )
}

export default AuthLayout