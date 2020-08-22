import React from 'react';
import { connect } from 'react-redux';

import Dropbox from '../dropbox/dropbox.component';

import { changeListType } from '../../redux/input/input.actions';

import './list-type-input.styles.scss'

const options = [
    'all',
    'insects',
    'fish',
    'sea'
  ]

const ListTypeInput = ({changeListType}) => (
  <Dropbox name='list' change={changeListType} options={options}/>
)

const mapDispatchToProps = dispatch => ({
  changeListType: item => dispatch(changeListType(item.target.value))
})

export default connect(null, mapDispatchToProps)(ListTypeInput);