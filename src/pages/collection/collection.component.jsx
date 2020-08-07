import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './collection.styles.scss';

import Scroll from '../../components/scroll/scroll.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import {selectCollections} from '../../redux/collection/collection.selectors';

const Collections = ({collections}) => (
  <Scroll>
    {
      collections.map(({ title, sections }, i)=> (
        <div className='collection' key={i}>
          <span>{title.toUpperCase()}</span>
          {sections
            .map(({title, list}, j) => (
              <div key={j}>
                { sections.length > 1 ? <div>{title}</div> : null }
                <CollectionPreview list={list} />
              </div>
            ))
          }
          
        </div>
      ))
    }
  </Scroll>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(Collections);