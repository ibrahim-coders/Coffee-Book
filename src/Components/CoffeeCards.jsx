import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';
const CoffeeCards = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const data = useLoaderData();
  console.log(data);
  const [coffees, setCoffee] = useState([]);
  useEffect(() => {
    if (category) {
      const coffeeItem = [...data].filter(
        coffee => coffee.category === category
      );
      setCoffee(coffeeItem);
    } else {
      setCoffee(data);
    }
  }, [category, data]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto items-center mt-8">
        {coffees.slice(0, 6).map(coffee => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
      <div className="i text-center my-4">
        <button
          onClick={() => navigate('/coffees')}
          className="btn bg-green-600 py-4 px-8 text-white"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default CoffeeCards;
