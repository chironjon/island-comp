import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './CardList.css';
// const hemiFilter = (list) => {
// 	list.filter(critter => {
// 		critter.hemi 
// 	})
// };
const CardList = (props) => (

	<div className='card-list'>
		{
			// props.critters.filter()
      props.critters.map(critter => (
      		<InfoCard key={critter["Internal ID"]} critter={critter} hemi={props.hemi} type={props.type}/>
    		)
      )
	  }
  </div>
)

export default CardList;