import { Button, LinearProgress, Card } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigation = useNavigate()
  return (
    <Card className='w-25 m-auto login-card' elevation={6}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            localStorage.setItem("user", JSON.stringify(values));
            navigation("/admin/all-pages")
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <>
            <h3 className='text-center py-4'>Login</h3>
            <Form>
              {isSubmitting && <LinearProgress />}
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
              />
              <br />
              <Field
                className="email-input"
                component={TextField}
                type="password"
                label="Password"
                name="password"
              />
              <br />
              <Button
                className='w-100'
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Form>
          </>
        )}
      </Formik>
    </Card>
  );
}

export default AdminLogin