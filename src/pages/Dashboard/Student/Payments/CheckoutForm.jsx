import { CardElement, useElements, useStripe, } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const CheckoutForm = ({allselectedClasses, price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState(''); 
    const [transactionId, setTransactionId] = useState(''); 
    const [processing, setProcessing] = useState(false);
    const [instance] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const {user} = useAuth();

    useEffect(() => {
        instance.post('/create-payment-intent', {price})
        .then(res => {
            console.log(res?.data?.clientSecret);
            setClientSecret(res?.data?.clientSecret);
        })
    }, [])

    const handleSubmit = async(event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
              type: 'card',
              card,
            });

            if(error){
                setCardError(error.message);
            }
            else{
                setCardError('');
            }
        setProcessing(true);
        const {paymentIntent, confirmError} = await stripe.confirmCardPayment(
            clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'unknown'
                },
            },
        })
        if(confirmError){
            setCardError(confirmError);
        }
        
        if(paymentIntent.status === "succeeded"){
            setProcessing(false);
            setTransactionId(paymentIntent.id);

            // save payment info to server
            const payment = {
              email : user?.email, 
              transactionId: paymentIntent.id, 
              price,
              date: new Date(),
              quantity : allselectedClasses.length,
              cartItems: allselectedClasses.map(item => item._id),
              classsesId : allselectedClasses.map(item => item.courseId),
              status: 'service pending',
              courseNames : allselectedClasses.map(item => item.courseName)
            }

            instance.post('/payments', payment)
            .then(res => {
              console.log(res?.data)
              if(res?.data?.insertedId){
                // display confirm
              }
            })
          
          console.log('payment intent: ',paymentIntent);
        }
    
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button type="submit" disabled={!stripe} className="btn my-8 bg-[#01a2a6] text-white">
                Pay
            </button>
            { cardError && <p className="text-red-500"><small>{cardError}</small></p> }
            { transactionId && <p className="text-[#01a2a6]"><small>{transactionId}</small></p> }
            
            </form>
        </>
    );
};

export default CheckoutForm;