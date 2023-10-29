import {Hero} from '../components/Hero.jsx';
import {customFetch} from '../utils/api.js';
import {FeaturedProducts} from '../components/index.js';

const url = '/products?featured=true'

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
}

export const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
