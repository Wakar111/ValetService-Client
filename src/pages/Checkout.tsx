import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from 'react';

interface PayPalErrorResponse {
  message: string;
}

interface PayPalOrderResponse {
  orderId: string;
}

interface PayPalCaptureResponse {
  status: string;
  details: Record<string, unknown>;
}

const Checkout: React.FC = () => {
  const handlePaymentError = (err: any) => {
    console.error('Payment error:', err);
    if (err.message?.includes('insufficient')) {
      alert('Insufficient funds. Please use a different payment method.');
    } else {
      alert('Payment failed: ' + (err.message || 'Please try again'));
    }
  };

  const createPayPalOrder = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/paypal/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookingId: 'BOOKING_ID', // TODO: Get from booking context/state
          amount: 40.00
        })
      });
      
      const errorText = await response.text();
      const data = JSON.parse(errorText);
      if (!response.ok) {
        const errorData = data as PayPalErrorResponse;
        throw new Error(errorData.message || 'Failed to create order');
      }
      const orderData = data as PayPalOrderResponse;
      return orderData.orderId;
    } catch (err) {
      handlePaymentError(err);
      throw err;
    }
  };

  const capturePayPalOrder = async (orderID: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/paypal/capture-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderID })
      });

      const errorText = await response.text();
      const data = JSON.parse(errorText);
      if (!response.ok) {
        const errorData = data as PayPalErrorResponse;
        throw new Error(errorData.message || 'Failed to capture payment');
      }
      return data as PayPalCaptureResponse;
    } catch (err) {
      handlePaymentError(err);
      throw err;
    }
  };

  return (
    <div className="py-40">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Checkout</h1>
      <p className="text-lg text-gray-600">Bitte wählen Sie Ihre Zahlungsart aus:</p>
      <PayPalScriptProvider
        options={{
          clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || '',
          currency: 'EUR',
          intent: 'capture',
          components: 'buttons'
        }}
      >
        <PayPalButtons
        fundingSource="paypal"
        style={{ layout: "vertical" }}
        disabled={false}
        forceReRender={[import.meta.env.VITE_PAYPAL_CLIENT_ID]}
        createOrder={async () => {
            return await createPayPalOrder();
        }}

        onApprove={async (data) => {
            try {
                const details = await capturePayPalOrder(data.orderID);
                console.log('Transaction completed:', details);
                window.location.href = "/";
            } catch (err) {
                handlePaymentError(err);
            }
        }}
        onCancel={() => {
            window.location.href = "/";
        }}
      />
      </PayPalScriptProvider>
    </div>
  );
}

export default Checkout;