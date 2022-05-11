import React, { useState } from 'react';
import CustomButton from "../button/CustomButton";
import FormInput from "../form input/FormInput";
import {auth, createUserProfileDocument} from '../../firebase/firebase'
import './signup.scss'

function SignUpp() {
        const [userCredentials, setuserCredentials] = useState ({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
    
        })
        const {displayName, email, password, confirmPassword}= userCredentials 
    
        
  const HandleSubmit = async event =>{
      event.preventDefault();
  
      if(password !== confirmPassword){
          alert('Passwords do not match with each other')
          return;
      }
      
      try{
  
          const{user}= await auth.createUserWithEmailAndPassword(email, password)
         await createUserProfileDocument(user, {displayName})
      
           userCredentials({
              displayName:'',
              email:'',
              password:'',
              confirmPassword:''
           })
  
      }catch(error){
      console.log(error);
      }
  }
  
  const handleChange=event=>{
      const {name, value}= event.target;
      setuserCredentials({...userCredentials,
          [name]:value
      })
  }
      
     

    
        return (
            <div className='signUp'>
            <h2>I don't have account</h2>
            <span>Enter with your email and password</span>
            <form  className='signup-form' onSubmit={HandleSubmit}>

            <FormInput
                type='text'
                name='displayName'
                value={displayName}
                handleChange={handleChange}
                label='Display Name'
                required
            />
            <FormInput
                type='email'
                name='email'
                value={email}
                handleChange={handleChange}
                label='Email'
                required
            />
            <FormInput
                type='password'
                name='password'
                value={password}
                handleChange={handleChange}
                label='Password'
                required
            />
            <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                handleChange={handleChange}
                label='Confirm Password'
                required
            />
            <CustomButton type='submit'>
                Sign up
            </CustomButton>
            </form>
            
                
            </div>
        );
    }

      

    
    export default SignUpp