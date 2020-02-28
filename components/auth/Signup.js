import {Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import AuthTitle from '../common/AuthTitle';
import FormContainer from '../common/FormContainer';

const SignupForm = (props) => (
  <FormContainer>
    <AuthTitle>Signup</AuthTitle>
    <Form>
      <Form.Group controlId="username">
        <Form.Control type="text" name="username" placeholder="Username"/>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Control type="email" name="email" placeholder="Email"/>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Control type="password" name="password" placeholder="Password"/>
      </Form.Group>
      <Button variant="dark btn-block" type="submit">
        Submit
      </Button>
    </Form>
  </FormContainer>
)

export default SignupForm;
