import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  border: '1px solid #DDD'
`;

const Title = styled.h1`
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  padding-top: 50px;
`;

const SubTitle = styled.h3`
  line-height: 1.15;
  font-size: 2rem;
  text-align: center;
  padding-top: 30px;
  color: #B3B3B3
`;

const Layout = (props) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    <Container>
      <Title>My NextJS App</Title>
      <SubTitle>A home for all your NextJS documentation and tutorials</SubTitle>
      {props.children}
    </Container>
  </>
)

export default Layout
