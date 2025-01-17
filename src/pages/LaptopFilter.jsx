import React, { useState } from 'react';

const LaptopFilter = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search laptops by brand or model"
      />
    </div>
  );
};

export default LaptopFilter;
