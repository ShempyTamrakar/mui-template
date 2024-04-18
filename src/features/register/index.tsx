import { Helmet } from 'react-helmet-async';
import  RegisterView  from '../../components/sections/register';

export default function LoginPage() {
    return (
      <>
        <Helmet>
          <title> Register | Material UI </title>
        </Helmet>
        <RegisterView />
      </>
    );
  }