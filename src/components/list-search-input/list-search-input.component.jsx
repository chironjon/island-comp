import React from 'react';
import { connect } from 'react-redux';

import SearchBox from '../search-box/search-box.component';

import { changeSearchField } from '../../redux/input/input.actions';

import './list-search-input.styles.scss'

const ListSearchInput = ({ changeSearchField }) => (
  <SearchBox onChange={changeSearchField} placeholder='Search??'/>
)

const mapDispacthToProps = dispatch => ({
  changeSearchField: item => dispatch(changeSearchField(item.target.value))
})

export default connect(null, mapDispacthToProps)(ListSearchInput);