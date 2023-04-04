import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const PUBLIC_KEY =
  "pk_test_51MskqzFnHtpyV359iem1Bpl9CZ8g8XjrqFXwKYJdKlRniTriJ6dajSMk6GoStSHzna7qjFLuNf52FUowdXoZsV7V00GfUZbYwN";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
