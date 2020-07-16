import React from 'react';

import './HemiInput.scss';

const HemiInput = ({ hemiChange }) => (
  <div className="hemiBoxes">
    <label htmlFor="hemi">Hemisphere: </label>
    <select name="hemi" id="hemiDrop" onChange={hemiChange}>
    	<option value="NH">North</option>
    	<option value="SH">South</option>
    </select>
  </div>
)

export default HemiInput;