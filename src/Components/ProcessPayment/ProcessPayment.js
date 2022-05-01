import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Ie0tjKQTC12sVSNpQLfknOBcapZA9DdIiXVjfvGdyYgpUvbH9Q39hW4YSb8jACk0IVZrnEkJmROJqt4uTBBeRub00K0WfgN4H');

const ProcessPayment = ({handlePaymentSuccess}) => {
	return (
		<Elements stripe={stripePromise}>
            <CheckoutForm handlePaymentSuccess={handlePaymentSuccess}/>
		</Elements>
	);
};

export default ProcessPayment;
