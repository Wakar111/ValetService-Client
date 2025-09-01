import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from 'react';

interface PayPalCheckoutProps {
  amount: number;
  bookingId?: string;
  onSuccess?: () => void;
  onError?: (error: any) => void;
  onCancel?: () => void;
  className?: string;
}

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

export const PayPalCheckout = ({
  amount,
  onSuccess,
  onError,
  onCancel,
  className
}: PayPalCheckoutProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentError = (err: any) => {
    console.error('Payment error:', err);
    if (err.message?.includes('insufficient')) {
      alert('Insufficient funds. Please use a different payment method.');
    } else {
      alert('Payment failed: ' + (err.message || 'Please try again'));
    }
    onError?.(err);
  };

  const createPayPalOrder = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/paypal/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookingId: 'BOOKING_ID',
          amount
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
    <div style={{ width: '200px' }} className={className}>
      <PayPalButtons
        style={{
          color: "gold",
          layout: "horizontal",
          shape: "rect",
          height: 55,
          tagline: false
        }}
        disabled={isProcessing}
        forceReRender={[amount]}
        createOrder={async () => {
          setIsProcessing(true);
          return await createPayPalOrder();
        }}
        onApprove={async (data) => {
          try {
            const details = await capturePayPalOrder(data.orderID);
            console.log('Transaction completed:', details);
            onSuccess?.();
          } catch (err) {
            handlePaymentError(err);
          } finally {
            setIsProcessing(false);
          }
        }}
        onCancel={() => {
          setIsProcessing(false);
          onCancel?.();
        }}
        onError={(err) => {
          setIsProcessing(false);
          handlePaymentError(err);
        }}
      />
    </div>
  );
}
