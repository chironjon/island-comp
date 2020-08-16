import React from 'react';

import Dropbox from '../dropbox/dropbox.component';

import './sort-input.styles.scss'

const options = [
  'name',
  'sell'
]

function sortChange (e) {
  console.log(e.target.value);
  return null;
}

const SortInput = (props) => (
  <Dropbox name='sort' change={sortChange} options={options}/>
)

export default SortInput;