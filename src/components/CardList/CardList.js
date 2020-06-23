import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './CardList.css';

const CardList = (props) => (

	<div className='card-list'>
	{
        props.insects.map(insect => (
        	<InfoCard key={insect["#"]} insect={insect}/>
        ))
    }
	</div>
)

export default CardList;