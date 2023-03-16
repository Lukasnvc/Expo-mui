import { Avatar, Box, Button, Grid, Paper, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react'
import { loginFormInitialValues, loginValidationSchema } from './const';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import { ShowContext } from '../../contexts/ShowContext';
import { TextField } from "formik-mui";
import { UserLogin } from '../../api/uerTypes';
import { useUsers } from '../../hooks/getUsers';

const Login = () => {
  const { handleLogIn, setUser } = useContext(ShowContext)
  const { data, isLoading } = useUsers();
  const users = data || []
  const onSubmit = (user: UserLogin) => {
    console.log(user)
    console.log(users)
    if (!isLoading) {
      const email = user.email;
      const password = user.password;
      const userExists = users.some(user => user.email === email && user.password === password);

      if (userExists) {
        const filteredUser = users.filter(user => user.email === email && user.password === password);
        console.log(filteredUser);
         handleLogIn(user)
      } else {
        console.log('User not found');
      }
    }
   
  }
  
  return (
    <Paper
      elevation={10}
      
    >
      <Box
        padding={2}
      >
        <Grid
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          container
        >
          <Avatar><LockOpenIcon/></Avatar>
          <Typography
            variant='h6'
            textAlign='center'
            my={2}
          >
            Login
          </Typography>
          <Formik
            initialValues={loginFormInitialValues }
            onSubmit={onSubmit}
            validator={ loginValidationSchema}
          >
            {({ isSubmitting }) => (
              <Form>
              <Field component={TextField} name='email' type='email' label="Email Address" sx={{ mb: 2 }} fullWidth required />
            <Field component={TextField} name='password' type='password' label="Password" sx={{ mb: 2 }} fullWidth required />
            <Button disabled={isSubmitting} type='submit' variant="contained" fullWidth sx={{mb: 2}}>Sign In</Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Box>
    </Paper>
  )
}

export default Login