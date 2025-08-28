import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Heart, Share2, ShoppingCart, Star, Plus, Minus } from "lucide-react";
import perfume1 from '@/assets/perfume-1.jpg';
import perfume2 from '@/assets/perfume-2.jpg';
import perfume3 from '@/assets/perfume-3.jpg';
import perfume4 from '@/assets/perfume-4.jpg';
import perfume5 from '@/assets/perfume-5.jpg';

// Mock product data - in real app this would come from API
const products = {
  "1": {
    id: "1",
    name: "Midnight Romance",
    description: "A captivating blend of dark berries, velvet roses, and mysterious musk that awakens your deepest desires. This intoxicating fragrance opens with fresh blackcurrant and bergamot, flowing into a heart of Bulgarian rose and jasmine, and settling into a base of warm amber, vanilla, and sensual musk.",
    price: 199,
    images: [perfume1, perfume2, perfume3],
    rating: 4.8,
    reviews: 124,
    sizes: ["30ml", "50ml", "100ml"],
    inStock: true,
    notes: {
      top: ["Blackcurrant", "Bergamot", "Pink Pepper"],
      heart: ["Bulgarian Rose", "Jasmine", "Lily of the Valley"],
      base: ["Amber", "Vanilla", "Musk", "Sandalwood"]
    }
  }
  // Add other products as needed
};

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    comment: "Absolutely divine! This perfume is perfect for romantic evenings. The scent lasts all day and gets so many compliments.",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Emily R.",
    rating: 4,
    comment: "Beautiful fragrance, very elegant and sophisticated. Love the packaging too!",
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "Jessica L.",
    rating: 5,
    comment: "This is my signature scent now. The quality is amazing and the bottle is gorgeous.",
    date: "2024-01-05"
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("50ml");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <button onClick={() => navigate("/")} className="btn-passion">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Collection</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl bg-card">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-300 ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < product.rating ? 'text-primary fill-current' : 'text-muted'}`} 
                    />
                  ))}
                </div>
                <span className="text-foreground/70">({product.reviews} reviews)</span>
              </div>
              <p className="text-3xl font-bold passion-gradient mb-6">${product.price}</p>
            </div>

            <p className="text-foreground/80 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="flex space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border transition-colors duration-300 ${
                      selectedSize === size 
                        ? 'border-primary bg-primary text-primary-foreground' 
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-border rounded-lg hover:border-primary transition-colors duration-300"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-border rounded-lg hover:border-primary transition-colors duration-300"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="btn-passion flex-1 flex items-center justify-center space-x-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 border rounded-lg transition-colors duration-300 ${
                  isLiked ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary'
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-3 border border-border rounded-lg hover:border-primary transition-colors duration-300">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Fragrance Notes */}
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold mb-4">Fragrance Notes</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-primary">Top Notes:</span>
                  <span className="ml-2 text-foreground/80">{product.notes.top.join(", ")}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Heart Notes:</span>
                  <span className="ml-2 text-foreground/80">{product.notes.heart.join(", ")}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Base Notes:</span>
                  <span className="ml-2 text-foreground/80">{product.notes.base.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-20 border-t border-border pt-12">
          <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold">{review.name}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'text-primary fill-current' : 'text-muted'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-2">{review.comment}</p>
                  <span className="text-sm text-foreground/60">{review.date}</span>
                </div>
              ))}
            </div>

            {/* Add Review Form */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                        className="text-2xl transition-colors duration-300"
                      >
                        <Star 
                          className={`h-6 w-6 ${i < newReview.rating ? 'text-primary fill-current' : 'text-muted'}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Review</label>
                  <textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full p-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    rows={4}
                    placeholder="Share your thoughts about this fragrance..."
                  />
                </div>
                <button className="btn-passion w-full">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;