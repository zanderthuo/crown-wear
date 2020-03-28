import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../preview-collection/PreviewCollection';
import {selectCollectionsForPreview} from '../../redux/shop/ShopSelector';

import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview   
  }); 

export default connect(mapStateToProps)(CollectionsOverview)   