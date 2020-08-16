import React from 'react';

import './dropbox.styles.scss';

const Dropbox = ({name, change, options}, id) => (
  <select name={name} id={id} onChange={change}>
    {
      options.map((props, id) => (
        <option id={id} value={props}>{props}</option>
      ))
    }
  </select>
)

export default Dropbox;