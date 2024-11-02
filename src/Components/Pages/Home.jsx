import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../Banner';
import Heading from '../Heading';
import Categories from './Categories';

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      <Banner />
      <Heading
        title={'Browse Coffees by Category'}
        subtitle={
          'Choose your desired coofee caegory to browse throgh specific coffees that fit in your taste'
        }
      />

      <Categories categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
