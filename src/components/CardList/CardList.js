import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './CardList.css';

const CardList = ({ hemi, critters }) => (
	<div className='card-list'>
		<div className='count'>showing: {critters.length} out of 200 critters</div>
		<div className='list'>
			{
	      critters.map(critter => (
	      		<InfoCard 
	      			key={critter["Internal ID"]} 
	      			critter={critter} 
	      			hemi={hemi} 
	      		/>
	    		))
		  }
	  </div>
  </div>
)

export default CardList;