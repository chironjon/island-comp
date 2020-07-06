import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './CardList.css';

const CardList = (props) => (

	<div className='card-list'>
		{
      props.critters.map(critter => (
      		<InfoCard key={critter["#"]} critter={critter}/>

    		)
      )
	  }
  </div>
)

export default CardList;