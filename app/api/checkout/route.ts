import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Ensure the secret key is available
const stripeSecretKey = process.env.STRIPE_SECRET_KEY_TEST;
if (!stripeSecretKey) {
    throw new Error('Stripe secret key is not defined in environment variables.');
}

const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2026-02-25.clover',
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { priceId } = body;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: priceId,
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${request.headers.get('origin')}/success`,
            cancel_url: `${request.headers.get('origin')}/cancel`,
        });

        return NextResponse.json({ id: session.id });
    } catch (error) {
        console.error('Checkout error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}