import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOvereview from '../../components/collections-overview/CollectionsOvereview';
import CollectionPage from '../collection/Collection';

const ShopPage = ({ match }) => {
  // console.log(match);
  return(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOvereview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> 
  </div>
)};
 

    
export default ShopPage;