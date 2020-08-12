import React from 'react';
import { connect } from 'react-redux';

import { toggleInfoHidden } from '../../redux/info/info.actions';

import CustomButton from '../custom-button/custom-button.component';
import './info.styles.scss';

const Info = ({ toggleInfoHidden }) => (
  <div className='info-container' onClick={toggleInfoHidden} >
    <span className='title'>
      INFO MODAL
    </span>
    <div className='content'></div>
    <CustomButton onClick={() => {}}>Close</CustomButton>  
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleInfoHidden: () => dispatch(toggleInfoHidden())
})

export default connect(
  null,
  mapDispatchToProps
)(Info);