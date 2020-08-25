import React from 'react';
import {connect} from 'react-redux';

import Dropbox from '../dropbox/dropbox.component';

import {changeSort, changeOrder} from '../../redux/input/input.actions';

import './sort-input.styles.scss'

const sortOptions = [
  '(pick)',
  'list',
  'name',
  'sell'
]
const orderOptions = [
  'desc',
  'inc'
]
const SortInput = ({changeSort, changeOrder}) => (
  <div className='drop-container'>
    <div className='sort-drop'>
      <label htmlFor="sort">sort: </label>
      <Dropbox name='sort' change={changeSort} options={sortOptions}/>
    </div>
    <div className='order-drop'>
      <Dropbox name='order' change={changeOrder} options={orderOptions}/>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  changeSort: item => dispatch(changeSort(item.target.value)),
  changeOrder: item => dispatch(changeOrder(item.target.value))
})

export default connect(null, mapDispatchToProps)(SortInput);