import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted ">
        {categories.map(category => (
          <NavLink
            key={category.category}
            to={`/category/${category.category}`}
            role="tab"
            className={({ isActive }) =>
              isActive
                ? 'tab  tab-active text-green-500 text-2xl'
                : ' text-2xl tab '
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
