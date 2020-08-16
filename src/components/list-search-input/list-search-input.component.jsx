import React from 'react';

import SearchBox from '../search-box/search-box.component';

import './list-search-input.styles.scss'

function collectionSearchChange (e) {
  console.log(e.target.value);
  return null;
}

const ListSearchInput = (props) => (
  <SearchBox onSearchChange={collectionSearchChange} placeholder='Search??'/>
)

export default ListSearchInput;