import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import InfoContent from '../info-content/info-content.component';
import CustomButton from '../custom-button/custom-button.component';

import { toggleInfoHidden, removeItemInfo } from '../../redux/info/info.actions';
import { selectInfoHidden } from '../../redux/info/info.selectors';
import { selectHemi } from '../../redux/input/input.selectors';

import './info.styles.scss';

const Info = ({ toggleInfoHidden, removeItemInfo, hemi, hidden }) => {
  //console.log('info')
  return(
  <div>
      { !hidden
        ? <div className='info-container'>
        <div className='info-content-container'>
          <InfoContent hemi={hemi}/>
          <CustomButton onClick={() => {toggleInfoHidden();removeItemInfo();}}>Close</CustomButton>  
        </div>
      </div>
        : null
    }
    </div>
  )}
  
  const mapStateToProps = createStructuredSelector({
    hidden: selectInfoHidden,
    hemi: selectHemi
  })

  const mapDispatchToProps = dispatch => ({
    toggleInfoHidden: () => dispatch(toggleInfoHidden()),
    removeItemInfo: () => dispatch(removeItemInfo())
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Info);