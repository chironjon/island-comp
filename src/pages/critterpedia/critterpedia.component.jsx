import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './critterpedia.styles.scss';

import UserInput from '../../components/user-input/user-input.component';
import Scroll from '../../components/scroll/scroll.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import {selectCollections} from '../../redux/collection/collection.selectors';

const Critterpedia = ({collections}) => (
  //section headers here
  //dropbox component choose lvl1 section
  //if lvl2 section.length < 1 just title if > 1 show dropbox
  //creature category has time selector component
  <div>
  <UserInput />
  <div className='collection'>
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
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(Critterpedia);