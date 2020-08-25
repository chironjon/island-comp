import React from 'react';
import { connect } from 'react-redux';

import ListSearchInput from '../list-search-input/list-search-input.component';
import HemiInput from '../hemi-input/hemi-input.component';
import ListTypeInput from '../list-type-input/list-type-input.component';
import TimeFrameInput from '../time-frame-input/time-frame-input.component';
import TimeInput from '../time-input/time-input.component';
import SortInput from '../sort-input/sort-input.component';


import './user-input.styles.scss';

const UserInput = (props) => (
  <div className='input-container'>
    <div className='search-container'>
      <ListSearchInput />
    </div>
    <div className='hemi-container'>
      <span>Hemisphere: </span>
      <HemiInput />
    </div>
    <div className='list-type-container'>
    <span>Critter Type: </span>
      <ListTypeInput />
    </div>
    <div className='time-frame-container'>
    <span>Time Frame: </span>
      <TimeFrameInput />
      <TimeInput />
    </div>
    <div className='sort-order-container'>
      <SortInput />
    </div>
  </div>
)
  


export default connect(null, null)(UserInput);