import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_6dhWwRSYgGmEC2b4WbYFKMxH00CanKxHVj';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout 
           label="Pay Now"
           name="Crown Wear ltd"
           billingAddress
           shippingAddress
           image='https://svgshare.com/i/CUz.svg'
           description={`Your total is KSH ${price}`}
           amount={priceForStripe}
           panelLabel="Pay Now"
           currency="KSH"
           token={onToken} 
           stripeKey={publishableKey}
        />
    );
};


export default StripeCheckoutButton;

