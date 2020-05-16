import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey = 'pk_test_o2RLsV1EvHp3bG8kcCefMdur00qr5z3m0M';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      name="Crwn Clothing"
      label="Pay Now"
      amount={priceInCents}
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
