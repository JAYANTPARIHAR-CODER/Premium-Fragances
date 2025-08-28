import { Heart, ShoppingCart, Star, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  onClick: () => void;
}

const ProductCard = ({ id, name, description, price, image, rating, onClick }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    
    // Add to cart with a small delay to show the animation
    addToCart({
      id,
      name,
      price,
      image,
      description
    });
    
    // Reset the button state after animation
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="product-card cursor-pointer group" onClick={onClick}>
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            <button 
              className="p-3 bg-primary rounded-full hover:bg-primary/80 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <Button 
              variant="ghost"
              size="icon"
              className={`p-2 rounded-full transition-all duration-300 ${
                isAdding 
                  ? 'bg-green-500 text-white scale-110' 
                  : 'bg-foreground text-background hover:bg-foreground/80'
              }`}
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? (
                <Check className="h-5 w-5 animate-bounce" />
              ) : (
                <ShoppingCart className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 text-primary fill-current" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold passion-gradient">
            ${price}
          </span>
          <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium">
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;