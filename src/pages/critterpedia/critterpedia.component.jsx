import React from 'react';
import { connect } from 'react-redux';

import UserInput from '../../components/user-input/user-input.component';
import Scroll from '../../components/scroll/scroll.component';
import ItemsDisplay from '../../components/items-display/items-display.component';

import './critterpedia.styles.scss';

const Critterpedia = ({collections}) => {
  const itemsObj = [];
  Object.values(collections).forEach(({id, category, items}) => {
    if(category === 'collections') {
      items.map(x => itemsObj.push({
        "type": id,
        "item": x
      }))
    }
  })
  console.log("critterpedia")
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

const mapStateToProps = ({ collection: { collections } }) => ({
  collections
})

export default connect(mapStateToProps)(Critterpedia);