import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from 'react';

interface PayPalCheckoutProps {
  amount: number;
  bookingId?: string;
  onSuccess?: (response: PayPalSuccessResponse) => void;
  onError?: (error: any) => void;
  onCancel?: () => void;
  className?: string;
}

interface PayPalSuccessResponse {
  status: string;
  orderId: string;
  bookingId: string;
}

export const PayPalCheckout = ({
  amount,
  bookingId = 'default',
  onSuccess,
  onError,
  onCancel,
  className
}: PayPalCheckoutProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentError = (err: any) => {
    //console.error('Payment error:', err);
    if (err.message?.includes('insufficient')) {
      alert('Insufficient funds. Please use a different payment method.');
    } else {
      alert('Payment failed: ' + (err.message || 'Please try again'));
    }
    onError?.(err);
  };

  const createOrder = () => {
    return {
      intent: 'CAPTURE' as const,
      purchase_units: [{
        amount: {
          value: amount.toString(),
          currency_code: 'EUR'
        },
        description: `Booking ID: ${bookingId}`
      }]
    };
  };

  const onApprove = async (_data: any, actions: any) => {
    try {
      setIsProcessing(true);
      const order = await actions.order.capture();
      onSuccess?.({ 
        status: order.status, 
        orderId: order.id,
        bookingId
      });
    } catch (error) {
      //console.error('Error capturing PayPal payment:', error);
      onError?.(error as Error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div style={{ width: '200px' }} className={className}>
      <PayPalButtons
        createOrder={(_, actions) => actions.order.create(createOrder())}
        onApprove={onApprove}
        onError={handlePaymentError}
        onCancel={onCancel}
        style={{
          color: "gold",
          layout: "horizontal",
          shape: "rect",
          height: 55,
          tagline: false
        }}
        disabled={isProcessing}
        forceReRender={[amount]}
      />
    </div>
  );
}
