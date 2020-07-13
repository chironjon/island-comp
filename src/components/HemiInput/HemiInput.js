import React from 'react';

import './HemiInput.css';

const HemiInput = ({ hemi, hemiChange }) => (
  <div className="hemiBoxes">
    <input 
      type="radio" 
      id="NH" 
      name="hemi" 
      value="NH" 
      checked={hemi === 'NH'} 
      onChange={hemiChange}
    />
    <label htmlFor="NH">North</label>
    <input 
      type="radio" 
      id="SH" 
      name="hemi" 
      value="SH" 
      checked={hemi === 'SH'} 
      onChange={hemiChange}
    />
    <label htmlFor="SH">South</label>
  </div>
)

export default HemiInput;