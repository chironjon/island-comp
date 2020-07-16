import React from 'react';

import './NameSearch.scss';

const NameSearch = ({ handleSearchChange }) => (
	<div className="searchBox">
    <input 
      type="text" 
      placeholder="search by name" 
      onChange={handleSearchChange}
    />
  </div>
)

export default NameSearch;