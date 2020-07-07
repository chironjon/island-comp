import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './CardList.css';

const CardList = (props) => (

	<div className='card-list'>
		{
      props.critters.map(critter => (
      		<InfoCard key={critter["Internal ID"]} critter={critter} type={critter["Type"]}/>

    		)
      )
	  }
  </div>
)

export default CardList;