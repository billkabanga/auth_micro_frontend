import {Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Formik } from 'formik';
import AuthTitle from '../common/AuthTitle';
import FormContainer from '../common/FormContainer';

const LoginForm = (props) => (
  <>
    <Formik
      initialValues={{username: '', password: ''}}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <FormContainer>
          <AuthTitle>Login</AuthTitle>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur} 
                alue={values.password}/>
            </Form.Group>
            <Button variant="dark btn-block" type="submit">
              Submit
            </Button>
          </Form>
        </FormContainer>
      )}
    </Formik>
  </>
)

export default LoginForm;
