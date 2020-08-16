import React from 'react';

import Dropbox from '../dropbox/dropbox.component';

import './order-input.styles.scss'

const options = [
  'inc',
  'dec'
]

function orderChange (e) {
console.log(e.target.value);
return null;
}

const OrderInput = (props) => (
  <Dropbox name='order' change={orderChange} options={options}/>
)

export default OrderInput;