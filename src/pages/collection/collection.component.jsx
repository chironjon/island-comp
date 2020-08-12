import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection.styles.scss';

import Scroll from '../../components/scroll/scroll.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import Info from '../../components/info/info.component';

import {hidden} from '../../redux/info/info.selectors';
import {selectCollections} from '../../redux/collection/collection.selectors';

const Collections = ({collections, hideInfo}) => (
  //section headers here
  //dropbox component choose lvl1 section
  //if lvl2 section.length < 1 just title if > 1 show dropbox
  //creature category has time selector component
  <div className='collection'>
  {
    hideInfo ? null :
    <Info />
  }
    <Scroll>
      { collections.map(({title, category, subcategory, list}, j) => (
        <div key={j}>
          { category === 'collections' 
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
);

const mapStateToProps = createStructuredSelector({
  hideInfo: hidden,
  collections: selectCollections
})

export default connect(mapStateToProps)(Collections);