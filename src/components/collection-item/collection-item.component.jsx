import React from 'react';
import { connect } from 'react-redux';

import Emoji from '../emoji/emoji.component';

import { toggleInfoHidden, addItemInfo } from '../../redux/info/info.actions';

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
const CollectionItem = ({item, toggleInfoHidden, addItemInfo, type, hemi, month}) => {
  const hemiStr = hemi
  const testString = hemiStr + ' ' + month;
  //*************
  let valueArr = [];
  let timeArr = []
  let timeObj = {};
  const monthReg = /([NS]H [A,J,F,M,S,O,N,D][a,e,p,u,c,o][n,b,r,y,n,l,g,p,t,v,c])/;
  const timeReg = /(\d{1,2}\s[AP]M\s–\s\d{1,2}\s[AP]M)|(All day)/g;
  
  Object.entries(item).forEach(x => {
    return monthReg.test(x[0]) ? timeObj[x[0]] = x[1] : null
  })
      console.log(timeObj)
  
  Object.values(timeObj).forEach(x => { // puts unique times into array
    return x !== "NA" && valueArr.includes(x) === false ? valueArr.push(x) : null
  })
  
  valueArr.forEach(x => timeArr.push(x.match(timeReg)))
  console.log(timeArr.flat())

  //*************
  //console.log(item[testString])
  return (
  <div className='collection-item' >
  
      <div key={item["Unique Entry ID"]} className='item-card'>
        <span className='name'>{capital_letter(item["Name"])}</span>
        <div className='item-card'>
          <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${item["Icon Filename"]}.png)`}}/>
          <div className='collection-footer'>
            { type !== "insects" ? <span className='where'>{item["Where/How"]}</span> : null }
            <span className='time'>{item[testString]}</span>
            <span className='price'>{item["Sell"]}</span>
          </div>
        </div>
        <div className='found'><Emoji symbol={"✔"} /></div>
        <div className='info-mark' onClick={() => {toggleInfoHidden(); addItemInfo(item);}}><Emoji symbol={"?"} /></div>
      </div>
  </div>
)};

const mapStateToProps = ({ input: { hemi, month } }) => ({
  hemi,
  month
})

const mapDispatchToProps = dispatch => ({
  toggleInfoHidden: () => dispatch(toggleInfoHidden()),
  addItemInfo: item => dispatch(addItemInfo(item))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);