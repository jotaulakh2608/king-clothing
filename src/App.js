import Homepage from "./pages/hompage/Homepage.jsx";
import { Switch, Route } from "react-router-dom";

import ShopPage from "./pages/shoppage/ShopPage.jsx";
import Header from "./components/header/Header.jsx";
import SignUp from "./pages/signUp/SignUp.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action.js";
import { Redirect } from "react-router";
import { selectCurrentUser } from "./redux/user/user.selector.js";
import CheckOut from "./pages/check-out/CheckOut.jsx";
import { GlobalStles } from "./global-styles.jsx";

function App() {

  const dispatch = useDispatch(
  )
  const setCurrentUsser = 
   (user) => dispatch(setCurrentUser(user))

  const currentUser = useSelector(
    selectCurrentUser
    )
    console.log(currentUser);
 
  useEffect(() => {
         auth.onAuthStateChanged(async (userAuth) => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
    
            userRef.onSnapshot((snapShot) => {
              setCurrentUsser({
                id: snapShot.id,
                ...snapShot.data(),
              });
            });
          } else {
            setCurrentUser(userAuth);
            //aha add krli add collection  addCollectionsAndDocuments('collection', collectionArray.map(({title, items})=>({title, items})))
            
          }
        });
  }, [])
  
  
  return (
    <div>
    <GlobalStles/>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} /> 
            <Route path="/checkout" component={CheckOut} />
            <Route exact path="/signup"  render={() =>
                currentUser ? <Redirect to="/" /> : <SignUp />
              }
            />
          </Switch>
        </div>
      );
      
      
    }
   
export default App;