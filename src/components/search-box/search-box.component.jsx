import React from 'react';

import './search-box.styles.scss';

const SearchBox = ({ onChange, placeholder }) => (
  <input type='text' placeholder={placeholder} onChange={onChange}/>
)

export default SearchBox;