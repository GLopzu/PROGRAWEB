import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'active' : ''}>All</button>
      <button onClick={() => handleFilterChange('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
      <button onClick={() => handleFilterChange('pending')} className={filter === 'pending' ? 'active' : ''}>Pending</button>
    </div>
  );
};

export default FilterButtons;
