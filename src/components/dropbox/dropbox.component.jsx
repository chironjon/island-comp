import React from 'react';

import './dropbox.styles.scss';

function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

const Dropbox = ({name, change, options}, id) => (
  <select name={name} id={id} onChange={change}>
    {
      options.map((props, id) => (
        <option key={id} value={props}>{capital_letter(props)}</option>
      ))
    }
  </select>
)

export default Dropbox;