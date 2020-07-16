import React from 'react';

import './SortingInput.scss'

const SortingInput = ({ sortCharChange, sortOrderChange }) => (
	<div>
		<div className="left">
			<label className="left">Sort By: </label>
			<select name="char" id="char" onChange={sortCharChange}>
				<option value="list">None</option>
				<option value="name">Name</option>
				<option value="price">Price</option>
				{/*<option disabled value="shadow">Shadow Size</option>
				<option disabled value="rarity">Rarity</option>*/}
			</select>
		</div>
		{/*
			sortBy.char === ""
		*/}
		<div className="right">
			<label>Order: </label>
			<select name="order" id="order" onChange={sortOrderChange}>
				<option value="des">↑A-Z↓</option>
				<option value="asc">↑Z-A↓</option>
			</select>
		</div>
	</div>
)

export default SortingInput;