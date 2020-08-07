import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({list}) => (
  <div className='collection-preview'>
{/*<span className='title'>{list["Name"].toUpperCase()}</span>*/}
    <div className='preview'>
      {
        list
        //.filter((item, idx) => idx < 4)
        .map((item, id) => (
          <CollectionItem key={id} item={item}/>
        ))
      }
    </div>
  </div>
)
export default CollectionPreview;