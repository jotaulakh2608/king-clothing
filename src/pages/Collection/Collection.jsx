import React from 'react';
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CollectionItem from '../../components/Collection-item/CollectionItem';
import { selectCollection } from '../../redux/shop/shopSelector';
import './collection.scss'

function Collection() {
  const {collectionId}= useParams();

  const {title, items} = useSelector(selectCollection(collectionId))
  return (
  <div className='Collection'>
      <h2 className='title'>{title}</h2>
<div className="item">
   {
        items.map(
          item=> <CollectionItem  key={item.id} item={item}/>
        )
      }
</div>
     

  </div>);
}

export default Collection