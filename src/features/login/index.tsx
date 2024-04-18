import { Helmet } from 'react-helmet-async';
import  LoginView  from '../../components/sections/login';

export default function LoginPage() {
    return (
      <>
        <Helmet>
          <title> Login | Material UI </title>
        </Helmet>
        <LoginView />
      </>
    );
  }