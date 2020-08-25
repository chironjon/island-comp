import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import UserInput from '../../components/user-input/user-input.component';
import Scroll from '../../components/scroll/scroll.component';
//import ItemsDisplay from '../../components/items-display/items-display.component';

import { selectCollections } from '../../redux/collection/collection.selectors';

import './catalogpage.styles.scss';

const CatalogPage = ({collections}) => {
  //console.log('catalog')
  return (
  <div>
  <h1>!UNDER CONSTRUCTION!</h1>
  <h1>THANKS FOR YOUR PATIENCE :D</h1>
  <UserInput />
  <div className='collection'>
    <Scroll>
      {/* collections.map(({title, category, subcategory, list}, j) => (
        <div key={j}>
          { category === 'catalog' 
            ? <div>
                <div className='title'>{title}</div>          
                <ItemsDisplay list={list} />
              </div>
            : null 
      }
        </div>
      ))*/}
    </Scroll>
  </div>
  </div>
)}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CatalogPage);