import React from 'react';

import Dropbox from '../dropbox/dropbox.component';

import './list-type-input.styles.scss'

const options = [
    'all',
    'insects',
    'fish',
    'sea'
  ]

function listTypeChange (e) {
  console.log(e.target.value);
  return null;
}

const ListTypeInput = (props) => (
  <Dropbox name='list' change={listTypeChange} options={options}/>
)

export default ListTypeInput;