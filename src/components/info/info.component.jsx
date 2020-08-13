import React from 'react';
import { connect } from 'react-redux';

import InfoContent from '../info-content/info-content.component';
import CustomButton from '../custom-button/custom-button.component';

import { toggleInfoHidden } from '../../redux/info/info.actions';

import './info.styles.scss';

const Info = ({ toggleInfoHidden }) => (

      <div className='info-container'>
        <div className='info-content-container'>
          <InfoContent/>
          <CustomButton onClick={toggleInfoHidden}>Close</CustomButton>  
        </div>
      </div>
  )
  
  

  const mapDispatchToProps = dispatch => ({
    toggleInfoHidden: () => dispatch(toggleInfoHidden())
  })
  
  export default connect(
    null,
    mapDispatchToProps
  )(Info);