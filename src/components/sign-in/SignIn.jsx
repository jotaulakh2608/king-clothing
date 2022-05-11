import React, { useState } from "react";
import CustomButton from "../button/CustomButton";
import FormInput from "../form input/FormInput";
import "./sign-in.scss";
import '../button/button.scss'
import {auth, signInWithGoogle} from '../../firebase/firebase.js'


function SignIn() {
  const [user, setuser] = useState({
    email:'',
    password:''
  })
  const{email, password}= user
 const HandleSubmit =  async event => {
    event.preventDefault();

try {
  await auth.signInWithEmailAndPassword(email, password)
   setuser({ email: "", password: "" });
  
} catch (error) {
  console.log(error);
}

   
  };
 const handleChange = (event) => {
    const { value, name } = event.target;

    setuser({...user,
      [name]: value
    });
  };
  return (
    <div>      <div className="sign-in">
    <h2>I already have an account</h2>
    <span>Sign in with your email and password </span>

    <form onSubmit={HandleSubmit} className="form">
      <FormInput
        type="email"
        name="email"
        handleChange={handleChange}
        label="email"
        value={email}
        required
      />

      <FormInput
        type="password"
        name="password"
        handleChange={handleChange}
        value={password}
        label="password"
        required
      />
    <div className="button"> 
<CustomButton  type='submit' >Sign in </CustomButton>
    <CustomButton  
    type='button'
    onClick={signInWithGoogle} isGoogleSignIn>{''}Sign in with Google{''}</CustomButton>
    </div>
  
    {/* <CustomButton type="submit">Sign In</CustomButton> */}
    </form>
  </div></div>
  )
}

export default SignIn

 
