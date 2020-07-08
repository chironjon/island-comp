import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './CardList.css';

const CardList = (props) => (

	<div className='card-list'>
		{
			// props.critters.filter()
      props.critters.map(critter => (
      		<InfoCard key={critter["Internal ID"]} critter={critter}/>
    		)
      )
	  }
  </div>
)

export default CardList;