import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Emoji from '../emoji/emoji.component';

import { toggleInfoHidden, addItemInfo } from '../../redux/info/info.actions';
import { selectListTime } from '../../redux/input/input.selectors';

import './collection-item.styles.scss';

function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
// const regex = /(\d{1,2} [ap]m - \d{1,2} [ap]m)/ig;
// const userData = {
//   "lists": [
//     {
//       "inCat": [
//         {
//           "found": true
//         }
//       ]
//     }
//   ]
// }

const CollectionItem = ({item, type, time, timesAvailAllYear, currentItemCurrentMonthAvail, toggleInfoHidden, addItemInfo, listTime}) => {
  //console.log(time, currentItemCurrentMonthAvail)
  return (
  <div className='collection-item' >
  
      <div key={item["Unique Entry ID"]} className='item-card'>
        <span className='name'>{capital_letter(item["Name"])}</span>
        <div className='item-card'>
          <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${item["Icon Filename"]}.png)`}}/>
          <div className='collection-footer'>
            { type !== "insects" ? <span className='where'>{item["Where/How"]}</span> : null }
            {listTime !== "all year" ? <span>{currentItemCurrentMonthAvail}</span> : <span>{timesAvailAllYear.join('; ')}</span>}
            <span className='price'>{item["Sell"]}</span>
          </div>
        </div>
        <div className='found'><Emoji symbol={"✔"} /></div>
        <div className='info-mark' onClick={() => {toggleInfoHidden(); 
          addItemInfo(
            {"item": item,"currentItemCurrentMonthAvail": currentItemCurrentMonthAvail}
            );}}><Emoji symbol={"?"} /></div>
      </div>
  </div>
)};

const mapStateToProps = createStructuredSelector({
  listTime: selectListTime
})

const mapDispatchToProps = dispatch => ({
  toggleInfoHidden: () => dispatch(toggleInfoHidden()),
  addItemInfo: item => dispatch(addItemInfo(item))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);