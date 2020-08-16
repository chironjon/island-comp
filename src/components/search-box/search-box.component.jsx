import React from 'react';

import './search-box.styles.scss';

const SearchBox = ({ onSearchChange, placeholder }) => (
  <input type='text' placeholder={placeholder} onChange={onSearchChange}/>
)

export default SearchBox;