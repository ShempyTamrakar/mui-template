import { Helmet } from 'react-helmet-async';
import  BlogView  from '../../components/sections/blog';

export default function LoginPage() {
    return (
      <>
        <Helmet>
          <title> Blog | Material UI </title>
        </Helmet>
        <BlogView />
      </>
    );
  }