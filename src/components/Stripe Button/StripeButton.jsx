import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

function StripeButton({price}) {

    const OnToken= token=> {
        console.log(token);
        alert('Payment is successful')
    }

 const priceForStripe = {price}*100 
const publishableKey=   'pk_test_51KMaDNSBm26DDRis6SWSg3eve7AAhhf3nRdmJwA3j5SxQzL98TQFtcibytDH8guh9ZyjkPG0VjZgRWIqIWmdfbe800bxFpbMY6'
  return (
 <StripeCheckout
     name="KING CLOTHING .ltd"
     label="Pay now"
     panelLabel= "Pay Now"
     amount={priceForStripe}
     billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      stripeKey={publishableKey}
      token={OnToken}
 />);
}

export default StripeButton;
