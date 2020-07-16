import React from 'react';

import './ListTypeInput.scss';

const ListTypeInput = ({ onListChange }) => (
	<div className="listBoxes">
    <label htmlFor="critters">Critter Type: </label>
    <select name="critters" id="critters" onChange={onListChange}>
      <option value="all">All</option>
      <option value="insect">Insects</option>
      <option value="fish">Fish</option>
      <option value="sea">Sea Creatures</option>
    </select>
  </div>
)

export default ListTypeInput;