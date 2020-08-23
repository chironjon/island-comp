import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionItem from '../collection-item/collection-item.component';

import { selectSearchField, selectListType, selectListTime, selectMonth, selectHour, selectHemi, selectSort, selectOrder } from '../../redux/input/input.selectors';

import './items-display.styles.scss';

const ItemsDisplay = ({items, searchField, listType, listTime, hemi, hour, month, sortBy, order}) => {
  const monthCheck = hemi + " " + month
  const hourCheck = '';
  //console.log(monthCheck)

  const filterItems = items
  .filter(({item, type}) =>
    listType === "all" ? item : type.includes(listType)
  )
  .filter(({item}) =>
    listTime === "all year" ? item : item[monthCheck] !== "NA"
  )//if listTime is year return all critters, if not return critters that match current month
  .filter(({item, time}) =>
    listTime === "by hour" ? item : item
  )// if listTime is hour return all critters with matching hour input, if not just return all
  // .filter(critter =>
  //   listTime === "now" ? critter[time.hour] === "TRUE" : critter
  // )
  .filter(({item}) =>
    item["Name"]
      .toLowerCase()
      .includes(searchField.toLowerCase())
  )
  const sortedItems = filterItems.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        var nameA = a.item["Name"].toUpperCase();
        var nameB = b.item["Name"].toUpperCase();
        if (order === "desc") {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        } else if (order === "inc") {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
        }
        break;
      case 'sell':
        if(order === "desc"){
          return b.item["Sell"] - a.item["Sell"];
        } else if (order === "inc"){
          return a.item["Sell"] - b.item["Sell"]
        }
        break;
      // case 'shadow':
      //   break;
      // case 'rarity':
      //   return b["Spawn Rate"] - a["Spawn Rate"];
      //   break;
      case 'list':
        return null;
    }
  });
  console.log(sortedItems)
  return(
  <div className='collection'>
      { 
        sortedItems
        .map(({type, item, time}, y) => (
          <CollectionItem key={y} type={type} item={item} time={time} />
        ))
      }
  </div>
)}

const mapStateToProps = createStructuredSelector({
  searchField: selectSearchField,
  listType: selectListType,
  listTime: selectListTime,
  hemi: selectHemi,
  hour: selectHour,
  month: selectMonth,
  sortBy: selectSort,
  order: selectOrder
})

export default connect(mapStateToProps)(ItemsDisplay);