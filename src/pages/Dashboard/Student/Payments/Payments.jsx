import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../../hooks/useCart";

const Payments = () => {
    const [allselectedClasses] = useCart();
    const totalPrice = allselectedClasses.reduce((sum, item) => item.coursePrice + sum, 0);
    const price = parseFloat(totalPrice.toFixed(2));
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div className="w-2/3 p-4"> 
            <h2 className="text-center text-3xl font-semibold my-10">Complete Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm allselectedClasses = {allselectedClasses} price = {price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payments;