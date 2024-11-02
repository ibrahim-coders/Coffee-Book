import { useLoaderData } from 'react-router-dom';
import Card from '../Card';
import { useState } from 'react';

const Coffees = () => {
  const data = useLoaderData();
  const { rating } = data;
  console.log(data);
  const [coffee, setCoffee] = useState(data);
  const handleSort = sortBy => {
    let sortedData;

    if (sortBy === 'popularity') {
      sortedData = [...coffee].sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === 'price') {
      sortedData = [...coffee].sort((a, b) => a.rating - b.rating);
    }

    setCoffee(sortedData);
  };
  return (
    <>
      <div className="flex justify-between items-center my-10">
        <div>
          <h2 className="text-3xl font-bold">Popularity Rating Coffees</h2>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => handleSort('rating')}
            className="btn btn-success"
          >
            Success
          </button>
          <button
            onClick={() => handleSort('popularity')}
            className="btn btn-warning"
          >
            Warning
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto items-center mt-8">
        {data.map(coffee => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Coffees;
