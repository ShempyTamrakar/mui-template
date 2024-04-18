import { Helmet } from 'react-helmet-async';
import  ProductsView from '../../components/sections/products/view';


export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Products </title>
      </Helmet>

      <ProductsView />
    </>
  );
}
