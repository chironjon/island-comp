import React from 'react';

import './ListTypeInput.css';

const ListTypeInput = ({ listType, onListChange }) => (
	<div className="listBoxes">
    <input 
      type="radio" 
      id="all" 
      name="critters" 
      value="all" 
      checked={listType === 'all'} 
      onChange={onListChange}
    />
    <label htmlFor="all">All</label>
    <input
      type="radio" 
      id="insect" 
      name="critters" 
      value="insect" 
      checked={listType === 'insect'} 
      onChange={onListChange}
    />
    <label htmlFor="insects">Insects</label>
    <input
      type="radio" 
      id="fish" 
      name="critters" 
      value="fish" 
      checked={listType === 'fish'} 
      onChange={onListChange}
    />
    <label htmlFor="fish">Fish</label>
    <input
      type="radio" 
      id="sea" 
      name="critters" 
      value="sea" 
      checked={listType === 'sea'} 
      onChange={onListChange}
    />
    <label htmlFor="seaCreatures">Sea Creatures</label>
  </div>
)

export default ListTypeInput;