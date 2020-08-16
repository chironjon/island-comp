import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './catalogpage.styles.scss';

import UserInput from '../../components/user-input/user-input.component';
import Scroll from '../../components/scroll/scroll.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import {selectCollections} from '../../redux/collection/collection.selectors';

const CatalogPage = ({collections}) => (
  <div>
  <h1>!UNDER CONSTRUCTION!</h1>
  <h1>THANKS FOR YOUR PATIENCE :D</h1>
  <UserInput />
  <div className='collection'>
    <Scroll>
      { collections.map(({title, category, subcategory, list}, j) => (
        <div key={j}>
          { category === 'catalog' 
            ? <div>
                <div className='title'>{title}</div>          
                <CollectionPreview list={list} />
              </div>
            : null 
          }
        </div>
      ))}
    </Scroll>
  </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CatalogPage);