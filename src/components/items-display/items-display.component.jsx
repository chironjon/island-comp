import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionItem from '../collection-item/collection-item.component';

import { selectSearchField, selectListType, selectListTime, selectMonth, selectHour, selectHemi } from '../../redux/input/input.selectors';

import './items-display.styles.scss';

const ItemsDisplay = ({items, searchField, listType, listTime, hemi, hour, month}) => {
  const monthCheck = hemi + " " + month
  console.log(monthCheck)
  // const sortArr = items.sort((a, b) => {
  //   switch (sortBy.char) {
  //     case 'name':
  //       var nameA = a["Name"].toUpperCase();
  //       var nameB = b["Name"].toUpperCase();
  //       if (sortBy.order === "des") {
  //         if (nameA < nameB) {
  //           return -1;
  //         }
  //         if (nameA > nameB) {
  //           return 1;
  //         }
  //       } else if (sortBy.order === "asc") {
  //         if (nameA > nameB) {
  //           return -1;
  //         }
  //         if (nameA < nameB) {
  //           return 1;
  //         }
  //       }
  //       return 0;
  //       break;
  //     case 'price':
  //       if(sortBy.order === "des"){
  //         return b["Sell"] - a["Sell"];
  //       } else if (sortBy.order === "asc"){
  //         return a["Sell"] - b["Sell"]
  //       }
  //       break;
  //     // case 'shadow':
  //     //   break;
  //     // case 'rarity':
  //     //   return b["Spawn Rate"] - a["Spawn Rate"];
  //     //   break;
  //     case 'list':
  //       return true;
  //   }
  // });
  const filterItems = items
  .filter(({item, type}) =>
    listType === "all" ? item : type.includes(listType)
  )
  .filter(({item}) =>
    listTime === "all year" ? item : item[monthCheck] !== "NA"
  )//if listTime is year return all critters, if not return critters that match current month
  .filter(({item}) =>
    listTime === "hour" ? null : item
  )// if listTime is hour return all critters with matching hour input, if not just return all
  // .filter(critter =>
  //   listTime === "now" ? critter[time.hour] === "TRUE" : critter
  // )
  .filter(({item}) =>
    item["Name"]
      .toLowerCase()
      .includes(searchField.toLowerCase())
  )
  return(
  <div className='collection'>
      { 
        filterItems
        .map(({type, item}, y) => (
          <CollectionItem key={y} type={type} item={item} />
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
  month: selectMonth
})

export default connect(mapStateToProps)(ItemsDisplay);