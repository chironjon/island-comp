import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCollections} from '../../redux/collection/collection.selectors';

import './catalogpage.styles.scss';

const CatalogPage = ({collections}) => (
  <div>Catalog</div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CatalogPage);