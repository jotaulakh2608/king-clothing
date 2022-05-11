import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.style'

const WithSpinner= WrappedComponents =>{
    const spinner =({isLoading, ...otherProps})=>{

    return isLoading?(
        <SpinnerContainer>
            <SpinnerOverlay/>
        </SpinnerContainer>
    ):
    (<WrappedComponents{...otherProps}/>)
}
return spinner 
}
export default WithSpinner