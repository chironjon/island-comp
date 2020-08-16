import React from 'react';
import { connect } from 'react-redux';

import InfoContent from '../info-content/info-content.component';
import CustomButton from '../custom-button/custom-button.component';

import { toggleInfoHidden, removeItemInfo } from '../../redux/info/info.actions';

import './info.styles.scss';

const Info = ({ toggleInfoHidden, removeItemInfo }) => (

      <div className='info-container'>
        <div className='info-content-container'>
          <InfoContent/>
          <CustomButton onClick={() => {toggleInfoHidden();removeItemInfo();}}>Close</CustomButton>  
        </div>
      </div>
  )
  
  

  const mapDispatchToProps = dispatch => ({
    toggleInfoHidden: () => dispatch(toggleInfoHidden()),
    removeItemInfo: () => dispatch(removeItemInfo())
  })
  
  export default connect(
    null,
    mapDispatchToProps
  )(Info);