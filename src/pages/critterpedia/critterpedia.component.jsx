import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import UserInput from '../../components/user-input/user-input.component';
import Scroll from '../../components/scroll/scroll.component';
import ItemsDisplay from '../../components/items-display/items-display.component';

import { selectCollections } from '../../redux/collection/collection.selectors';

import './critterpedia.styles.scss';

const Critterpedia = ({collections}) => {
  const itemsObj = [];
  Object.values(collections).forEach(({id, category, items}) => {
    if(category === 'collections') {
      items.map(x => itemsObj.push({
        "type": id,
        "item": x,
        "time": {
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
        }
      }))
    }
  })
  //console.log("critterpedia")
  //const listFilter = items.filter(critter =>
  //  listType === "All" ? critter : critter["Type"].includes(listType)
  //) if listType is all, return all critters, if not return critters w/ that listType
  //.filter(critter =>
  //  listTime === "Year" ? critter : critter[monthCheck] !== "NA"
  //)if listTime is year return all critters, if not return critters that match current month
  //.filter(critter =>
  //  listTime === "Hour" ? critter[time.hour] === "TRUE" : critter
  //) if listTime is hour return all critters with matching hour input, if not just return all
  //.filter(critter =>
  //  listTime === "Now" ? critter[time.hour] === "TRUE" : critter
  //)
  
  return (

  <div>
    <UserInput />
    <div className='collection'>
      <Scroll>
        <ItemsDisplay items={itemsObj} />
      </Scroll>
    </div>
  </div>
)};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(Critterpedia);