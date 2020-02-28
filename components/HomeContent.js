import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  width: 50%;
`;

const HomeContent = () => {
  const router = useRouter();

  return (
    <ContentContainer>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <p>Already a user?</p>
            <Button variant="primary" onClick={() => router.push('/login')}>Login</Button>
          </Col>
          <Col>
            <p>Are you a new User?</p>
            <Button variant="info" onClick={() => router.push('/signup')}>Signup</Button>
          </Col>
        </Row>
      </Container>
    </ContentContainer>
  );
};

export default HomeContent;
