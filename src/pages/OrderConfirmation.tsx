import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContextProvider";
import { useEffect } from "react";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  // Clear the cart when this component mounts
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-card rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for shopping with us! Your order has been received and is being processed.
        </p>
        
        <div className="bg-muted/50 p-6 rounded-lg mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>You'll receive an order confirmation email shortly</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>We'll notify you when your order ships</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Estimated delivery: 3-5 business days</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            While you wait, why not explore more of our collection?
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto"
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </Button>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border">
          <h3 className="font-medium mb-4">Why Shop With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Premium Quality",
                description: "Handpicked selection of the finest fragrances"
              },
              {
                title: "Fast Shipping",
                description: "Quick delivery right to your doorstep"
              },
              {
                title: "Secure Payment",
                description: "100% secure payment processing"
              }
            ].map((feature, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-medium mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
