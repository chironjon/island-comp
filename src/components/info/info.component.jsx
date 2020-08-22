import React from 'react';
import { connect } from 'react-redux';

import InfoContent from '../info-content/info-content.component';
import CustomButton from '../custom-button/custom-button.component';

import { toggleInfoHidden, removeItemInfo } from '../../redux/info/info.actions';

import './info.styles.scss';

const Info = ({ toggleInfoHidden, removeItemInfo, currentInfoItem, hemi, hidden }) => {
  console.log('info')
  return(
  <div>
      { !hidden
        ? <div className='info-container'>
        <div className='info-content-container'>
          <InfoContent currentItem={currentInfoItem} hemi={hemi}/>
          <CustomButton onClick={() => {toggleInfoHidden();removeItemInfo();}}>Close</CustomButton>  
        </div>
      </div>
        : null
    }
    </div>
  )}
  
  const mapStateToProps = ({ info: { currentInfoItem, hidden }, input: { hemi } }) => ({
    currentInfoItem,
    hidden,
    hemi
  })

  const mapDispatchToProps = dispatch => ({
    toggleInfoHidden: () => dispatch(toggleInfoHidden()),
    removeItemInfo: () => dispatch(removeItemInfo())
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Info);