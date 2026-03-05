'use client';

import { useCallback } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutButtonProps {
  priceId: string;
  children: React.ReactNode;
}

export function CheckoutButton({ priceId, children }: CheckoutButtonProps) {
  const handleCheckout = useCallback(async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Error creating checkout session');
      }

      // Get Stripe instance
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      // Redirect to Checkout
      window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
    } catch (error) {
      console.error('Checkout error:', error);
      // Here you could show an error message to the user
    }
  }, [priceId]);

  return (
    <button
      onClick={handleCheckout}
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </button>
  );
}