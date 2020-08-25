import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import UserInput from '../../components/user-input/user-input.component';
import Scroll from '../../components/scroll/scroll.component';
import ItemsDisplay from '../../components/items-display/items-display.component';

import { selectCollections } from '../../redux/collection/collection.selectors';

import './critterpedia.styles.scss';
import { selectHemi, selectMonth } from '../../redux/input/input.selectors';

const hourKeyArr = [
  '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM',
  '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM',
  '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
]
const monthReg = /([NS]H [A,J,F,M,S,O,N,D][a,e,p,u,c,o][n,b,r,y,n,l,g,p,t,v,c])/;
const timeReg = /(\d{1,2}\s[AP]M\s–\s\d{1,2}\s[AP]M)|(All day)|(NA)/g;
const timeStartEndReg = /(\d{1,2}\s[AP]M)|(All day)|(NA)/g;

const Critterpedia = ({collections, hemi, month}) => {
  //console.log('critterpedia')
  
  //----item object function start
  const itemsObj = {};//new object for critters array
  const monthCheck = hemi + ' ' + month;
  
  Object.values(collections).forEach(({id, category, items}) => {//pull values from collections..
    if(category === 'collections') {//..that match category: 'collections'
      items.forEach(item => {//for each item from matched category..
        let valueArr = [];
        let timeObj = {};
        let currentItemCurrentMonthAvail = item[monthCheck];// current month/hemi state pull the current time available
        let time = {
          "12 AM": false,
          "1 AM": false,
          "2 AM": false,
          "3 AM": false,
          "4 AM": false,
          "5 AM": false,
          "6 AM": false,
          "7 AM": false,
          "8 AM": false,
          "9 AM": false,
          "10 AM": false,
          "11 AM": false,
          "12 PM": false,
          "1 PM": false,
          "2 PM": false,
          "3 PM": false,
          "4 PM": false,
          "5 PM": false,
          "6 PM": false,
          "7 PM": false,
          "8 PM": false,
          "9 PM": false,
          "10 PM": false,
          "11 PM": false
        }; //individual time object template starting all false
        
        Object.entries(item).forEach(x => { // assign timeObj 24 months of availability in ex: "NH Jan": "8 AM – 5 PM" format
          return monthReg.test(x[0]) ? timeObj[x[0]] = x[1] : null
        })
        Object.values(timeObj).forEach(x => { // take unique times from timeObj
          return x !== "NA" && valueArr.includes(x) === false ? valueArr.push(x) : null
        })

        
        let timesAvailArr = currentItemCurrentMonthAvail.match(timeReg)
        
        let timeStartEndArr = timesAvailArr.map(x => x.match(timeStartEndReg)).flat()

        let timeKeyArr = []
        timeStartEndArr.forEach(x => timeKeyArr.push(hourKeyArr.indexOf(x)))

        switch (true) {
          
          case timeKeyArr[0] > timeKeyArr[1]:
            for (let i = timeKeyArr[0]; i < 24; i++){
              time[hourKeyArr[i]] = true;
            }
            for (let i = 0; i < timeKeyArr[1]; i++){
              time[hourKeyArr[i]] = true;
            }
            //console.log('overnight fill', time, item["Name"])
          break;
          case timeKeyArr.length > 2 && timeKeyArr[2] > timeKeyArr[3]:
            for (let i = timeKeyArr[0]; i < timeKeyArr[1]; i++){
              time[hourKeyArr[i]] = true;
            }
            for (let i = timeKeyArr[2]; i < 24; i++){
              time[hourKeyArr[i]] = true;
            }
            for (let i = 0; i < timeKeyArr[3]; i++){
              time[hourKeyArr[i]] = true;
            }  
            //console.log('split time fill with overnight', time, item["Name"])
          break;
          case timeKeyArr.length > 2:
            for (let i = timeKeyArr[0]; i < timeKeyArr[1]; i++){
              time[hourKeyArr[i]] = true;
            }
            for (let i = timeKeyArr[2]; i < timeKeyArr[3]; i++){
              time[hourKeyArr[i]] = true;
            }
            //console.log('split time fill no overnight', time, item["Name"])
          break;
          case currentItemCurrentMonthAvail === "All day":
            for (let i = 0; i <= 23; i++) {
              time[hourKeyArr[i]] = true;
            }
            //console.log('all day fill', time, item["Name"])
          break;
          default:
            for (let i = timeKeyArr[0]; i < timeKeyArr[1]; i++){
              time[hourKeyArr[i]] = true;
            }
            //console.log('default fill', time, item["Name"])
        }
        itemsObj[item["Unique Entry ID"]] = {
          "type": id,
          "item": item,
          time,
          "timesAvailAllYear": valueArr.map(x => x.match(timeReg)).flat(),
          "currentItemCurrentMonthAvail": currentItemCurrentMonthAvail
        }
      })
    }
    return
  })
 
//-------item object function end


  
  return (

  <div>
    <UserInput />
    <div className='collection'>
      <Scroll>
        <ItemsDisplay itemsObj={itemsObj} />
      </Scroll>
    </div>
  </div>
)};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
  hemi: selectHemi,
  month: selectMonth
})

export default connect(mapStateToProps)(Critterpedia);