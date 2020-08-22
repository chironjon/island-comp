import React from 'react';
import {connect} from 'react-redux';

import Dropbox from '../dropbox/dropbox.component';

import { changeHemi } from '../../redux/input/input.actions';

import './hemi-input.styles.scss'

const options = [
  'NH',
  'SH'
]

const HemiInput = ({ changeHemi }) => (
  <Dropbox name='hemi' change={changeHemi} options={options}/>
)

const mapDispatchToProps = dispatch => ({
  changeHemi: item => dispatch(changeHemi(item.target.value))
})

export default connect(null, mapDispatchToProps)(HemiInput);