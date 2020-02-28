import {Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Formik } from 'formik';
import AuthTitle from '../common/AuthTitle';
import FormContainer from '../common/FormContainer';
import authValidation from '../../utils/validation';


const SignupForm = (props) => (
  <>
    <Formik
      initialValues={{username: '', email: '', password: ''}}
      validationSchema={authValidation}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <FormContainer>
          <AuthTitle>Signup</AuthTitle>
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
              {
                errors.username && touched.username && (
                  <Form.Text style={{color: '#CD0000'}}>
                    {errors.username}
                  </Form.Text>
                )
              }
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                />
                {
                  errors.email && touched.email && (
                    <Form.Text style={{color: '#CD0000'}}>
                      {errors.email}
                    </Form.Text>
                  )
                }
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur} 
                value={values.password}/>
                {
                  errors.password && touched.password && (
                    <Form.Text style={{color: '#CD0000'}}>
                      {errors.password}
                    </Form.Text>
                  )
                }
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

export default SignupForm;
