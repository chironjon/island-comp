import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Emoji from '../emoji/emoji.component';

import { toggleInfoHidden, addItemInfo } from '../../redux/info/info.actions';
import { selectHemi, selectMonth, selectHour, selectListTime } from '../../redux/input/input.selectors';

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

//const hemi = /[NS]H /;
//const index = testString.search(hemi)

//console.log(index)
const CollectionItem = ({item, type, time, toggleInfoHidden, addItemInfo, hemi, month, hour, listTime}) => {
  const monthCheck = hemi + ' ' + month;
  const currentItemCurrentMonthAvail = item[monthCheck]
  // console.log(item["Name"], 'currentmonthavail', currentItemCurrentMonthAvail)
  //*************
  let valueArr = [];
  let timeObj = {};
  let hourKeyArr = [
    '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM',
    '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM',
    '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
  ]
  const monthReg = /([NS]H [A,J,F,M,S,O,N,D][a,e,p,u,c,o][n,b,r,y,n,l,g,p,t,v,c])/;
  const timeReg = /(\d{1,2}\s[AP]M\s–\s\d{1,2}\s[AP]M)|(All day)|(NA)/g;
  const timeStartEndReg = /(\d{1,2}\s[AP]M)|(All day)|(NA)/g;
  
  Object.entries(item).forEach(x => { // object of 24 months availability in ex: "NH Jan": "8 AM – 5 PM" format
    return monthReg.test(x[0]) ? timeObj[x[0]] = x[1] : null
  })
  
  
  Object.values(timeObj).forEach(x => { // puts unique times into array
    return x !== "NA" && valueArr.includes(x) === false ? valueArr.push(x) : null
  })
  const timesAvailAllYear = valueArr.map(x => x.match(timeReg)).flat()
  const timesAvailArr = currentItemCurrentMonthAvail.match(timeReg)
  //console.log('timesAvailArr', timesAvailArr)
  const timeStartEndArr = timesAvailArr.map(x => x.match(timeStartEndReg)).flat()
  //console.log('timeStartEndArr', timeStartEndArr)
  let timeKeyArr = []
  timeStartEndArr.forEach(x => timeKeyArr.push(hourKeyArr.indexOf(x)))
  //console.log('timeKeyArr', timeKeyArr)
  switch (true) {
    case timeKeyArr[0] === -1:
      console.log('all day fill', time, item["Name"])
      for (let i = 0; i <= 23; i++) {
        time[hourKeyArr[i]] = true;
      }
    break;
    case timeKeyArr[0] > timeKeyArr[1]:
      console.log('overnight fill', time, item["Name"])
      for (let i = timeKeyArr[0]; i < 24; i++){
        time[hourKeyArr[i]] = true;
      }
      for (let i = 0; i < timeKeyArr[1]; i++){
        time[hourKeyArr[i]] = true;
      }
    break;
    case timeKeyArr.length > 2 && timeKeyArr[2] > timeKeyArr[3]:
      console.log('split time fill with overnight', time, item["Name"])
       for (let i = timeKeyArr[0]; i < timeKeyArr[1]; i++){
        time[hourKeyArr[i]] = true;
      }
       for (let i = timeKeyArr[2]; i < 24; i++){
        time[hourKeyArr[i]] = true;
      }
      for (let i = 0; i < timeKeyArr[3]; i++){
        time[hourKeyArr[i]] = true;
      }  
    break;
    case timeKeyArr.length > 2:
      console.log('split time fill no overnight', time, item["Name"])
      for (let i = timeKeyArr[0]; i < timeKeyArr[1]; i++){
        time[hourKeyArr[i]] = true;
      }
      for (let i = timeKeyArr[2]; i < timeKeyArr[3]; i++){
        time[hourKeyArr[i]] = true;
      }
    break;
    default:
      console.log('default fill', time, item["Name"])
      for (let i = timeKeyArr[0]; i < timeKeyArr[1]; i++){
        time[hourKeyArr[i]] = true;
      }
  }


 
  

  //*************
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
        <div className='info-mark' onClick={() => {toggleInfoHidden(); addItemInfo(item);}}><Emoji symbol={"?"} /></div>
      </div>
  </div>
)};

const mapStateToProps = createStructuredSelector({
  hemi: selectHemi,
  month: selectMonth,
  hour: selectHour,
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