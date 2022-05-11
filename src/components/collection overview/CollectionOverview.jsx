import './collectionOverview.scss'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';
import React from 'react';
import { useSelector } from 'react-redux';

function CollectionOverview() {

  const collections = useSelector(selectCollectionsForPreview)
  return (
  <div className='collection-overview'>
   {collections.map(({id, ...otherCollectionProps}) =>(
        <CollectionPreview key={id} {...otherCollectionProps}/>
    ))
    }
  </div>);
}
export default CollectionOverview
