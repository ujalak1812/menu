import React from 'react';

const Categories = ({ categories, filterItems }) => {

  /*
  return (
    //1. manual approach
    <div className='btn-container'>
      <button className='filter-btn' onClick={() => filterItems('all')}>
        all
      </button>
      <button className='filter-btn' onClick={() => filterItems('breakfast')}>
        breakfast
      </button>
    </div>
    //we're not in sync with data, if there are more category we need to manually add button for each.. (lots of work ... !!)
  );
  */
  
  return (
    //2. filter & get unique categories from data, additional categories will also show up in list and buttons (if added)
    <div className='btn-container'>
      {categories.map((category, index) => {
        return <button type='button' className='filter-btn' key={index} onClick={() => filterItems(category)}>
          {category}
        </button>
      })}
    </div>

  );

};

export default Categories;
