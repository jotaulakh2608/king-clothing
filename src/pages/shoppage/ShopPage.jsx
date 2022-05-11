import CollectionOverview from "../../components/collection overview/CollectionOverview";
import { Route } from "react-router-dom";
import Collection from "../Collection/Collection";
import React, {  useEffect, useState } from "react";
import {
  convertCollectionToSnapshotMap,
  firestore,
} from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { ShopAction } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/withSpinner/WithSpinner";

function ShopPage({match}) {
  const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
  const CollectionPageWithSpinner = WithSpinner(Collection);
  
  const [loadingState, setloading] = useState( {loading: true})
  const { loading } = loadingState;
  const dispatch = useDispatch()
  const updateCollection =(collectionMap) => dispatch(ShopAction(collectionMap))
  
  useEffect(() => {
  
  const collectionRef = firestore.collection("collection");
  
  collectionRef.get().then((snapshot) => {
    const collectionMap = convertCollectionToSnapshotMap(snapshot);
    updateCollection(collectionMap);
    setloading({ loading: false });
  })
}, [])

    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
  )
}

export default ShopPage
