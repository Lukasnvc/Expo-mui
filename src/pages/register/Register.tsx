import { Avatar, Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { registerFormInitialValues, registerValidationSchema } from "./const";

import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import { TextField } from "formik-mui";
import { User } from "../../api/userTypes";
import { useCreateUser } from "../../hooks/getUsers";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { mutateAsync: userRegister } = useCreateUser();
  const navigate = useNavigate();
  const handleSubmit = (values: User) => {
    const { confirm_password, ...user } = values;
    userRegister(user)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Failed to create user :", error);
      });
  };
  return (
    <Paper elevation={10}>
      <Box padding={2}>
        <Grid justifyContent="center" alignItems="center" flexDirection="column" container>
          <Avatar>
            <ContactEmergencyIcon />
          </Avatar>
          <Typography variant="h6" textAlign="center" my={2}>
            Register
          </Typography>

          <Formik
            initialValues={registerFormInitialValues}
            onSubmit={handleSubmit}
            validationSchema={registerValidationSchema}>
            <Form>
              <Field
                component={TextField}
                name="first_name"
                type="text"
                label="First Name"
                sx={{ mb: 2 }}
                fullWidth
                required
                disabled={false}
              />
              <Field
                component={TextField}
                name="last_name"
                type="text"
                label="Last Name"
                sx={{ mb: 2 }}
                fullWidth
                required
                disabled={false}
              />
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
              <Field
                component={TextField}
                name="confirm_password"
                type="password"
                label="Repeat Password"
                sx={{ mb: 2 }}
                fullWidth
                required
                disabled={false}
              />

              <Button type="submit" variant="contained" fullWidth sx={{ mb: 2 }}>
                Continue
              </Button>
            </Form>
          </Formik>
          <Button variant="text" onClick={() => navigate("/")} fullWidth sx={{ mb: 2 }}>
            Log in
          </Button>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Register;
