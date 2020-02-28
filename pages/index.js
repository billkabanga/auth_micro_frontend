import Head from 'next/head'
import Layout from '../components/Layout'
import SignupForm from '../components/auth/Signup';
import LoginForm from '../components/auth/Login';
import HomeContent from '../components/HomeContent';


const Home = () => (
  <Layout>
    <HomeContent />
  </Layout>
)

export default Home
