import React from 'react';

import Dropbox from '../dropbox/dropbox.component';

import './hemi-input.styles.scss'

const options = [
  'SH',
  'NH'
  ]

function hemiChange (e) {
  console.log(e.target.value);
  return null;
}

const HemiInput = (props) => (
  <Dropbox name='hemi' change={hemiChange} options={options}/>
)

export default HemiInput;