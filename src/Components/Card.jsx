const Card = ({ coffee }) => {
  console.log(coffee);
  const {
    name,
    category,
    description,
    id,
    image,
    origin,
    type,
    rating,
    popularity,
  } = coffee || {};
  return (
    <div className="mx-auto">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-6 pt-6">
          <img src={image} alt="Shoes" className="rounded-xl h-48 w-full" />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">Name: {name}</h2>
          <p className="text-xl text-gray-800">Category: {category}</p>
          <p className="text-xl text-gray-800">Type: {type}</p>
          <p className="text-xl text-gray-800">Origin: {origin}</p>
          <p className="text-xl text-gray-800">Rating: {rating}</p>
          <p className="text-xl text-gray-800">Popular: {popularity}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
