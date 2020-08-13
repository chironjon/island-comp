import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, subtitle, imageUrl, size, history, linkUrl, match }) => (
	<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div 
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }} 
    />
    <div className='menu-item-content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>{subtitle}</span>
    </div>
  </div>
);

export default withRouter(MenuItem);