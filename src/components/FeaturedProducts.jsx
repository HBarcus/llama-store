import {SectionTitle} from './SectionTitle.jsx';
import {ProductsGrid} from './ProductsGrid.jsx';

export const FeaturedProducts = () => {
  return (
    <div className='pt-24'>
      <SectionTitle text='Featured Products' />
      <ProductsGrid />
    </div>
  );
};
