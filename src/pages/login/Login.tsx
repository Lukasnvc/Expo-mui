import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Field, Form, Formik, useFormikContext } from "formik";
import React, { useContext, useState } from "react";
import { loginFormInitialValues, loginValidationSchema } from "./const";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import { ShowContext } from "../../contexts/ShowContext";
import { TextField } from "formik-mui";
import { UserLogin } from "../../api/userTypes";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/getUsers";

const Login = () => {
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState<boolean>(false);
  const { handleLogIn, setUser } = useContext(ShowContext);
  const { data, isLoading } = useUsers();
  const users = data || [];

  const onSubmit = (user: UserLogin) => {
    if (!isLoading) {
      const email = user.email;
      const password = user.password;
      const userExists = users.some((user) => user.email === email && user.password === password);
      if (userExists) {
        const filteredUser = users.filter(
          (user) => user.email === email && user.password === password
        );
        handleLogIn(filteredUser[0]);
      } else {
        setNotFound(true);
      }
    }
  };

  return (
    <Paper elevation={10}>
      <Box padding={2}>
        <Grid justifyContent="center" alignItems="center" flexDirection="column" container>
          <Avatar>
            <LockOpenIcon />
          </Avatar>
          <Typography variant="h6" textAlign="center" my={2}>
            Login
          </Typography>
          {notFound && (
            <Typography variant="h6" textAlign="center" my={2} color="error">
              Wrong password or email
            </Typography>
          )}
          <Formik
            initialValues={loginFormInitialValues}
            onSubmit={onSubmit}
            validationSchema={loginValidationSchema}>
            <Form>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email Address"
                sx={{ mb: 2 }}
                fullWidth
                required
                disabled={false}
              />
              <Field
                component={TextField}
                name="password"
                type="password"
                label="Password"
                sx={{ mb: 2 }}
                fullWidth
                required
                disabled={false}
              />
              <Button type="submit" variant="contained" fullWidth sx={{ mb: 2 }}>
                Log in
              </Button>
            </Form>
          </Formik>
          <Button variant="text" fullWidth sx={{ mb: 2 }} onClick={() => navigate("/register")}>
            Sign up
          </Button>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Login;
