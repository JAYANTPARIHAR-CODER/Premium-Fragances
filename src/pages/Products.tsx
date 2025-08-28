import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import perfume1 from '@/assets/perfume-1.jpg';
import perfume2 from '@/assets/perfume-2.jpg';
import perfume3 from '@/assets/perfume-3.jpg';
import perfume4 from '@/assets/perfume-4.jpg';
import perfume5 from '@/assets/perfume-5.jpg';

const allProducts = [
  {
    id: "1",
    name: "Midnight Romance",
    description: "A captivating blend of dark berries, velvet roses, and mysterious musk that awakens your deepest desires.",
    price: 199,
    image: perfume1,
    rating: 4.8
  },
  {
    id: "2", 
    name: "Passion Rouge",
    description: "Fiery notes of red jasmine, cherry blossom, and warm amber create an irresistible aura of seduction.",
    price: 249,
    image: perfume2,
    rating: 4.9
  },
  {
    id: "3",
    name: "Velvet Desire",
    description: "Luxurious vanilla orchid meets spicy cinnamon and soft cashmere for an unforgettable sensual experience.",
    price: 179,
    image: perfume3,
    rating: 4.7
  },
  {
    id: "4",
    name: "Crimson Dreams",
    description: "Ethereal white tea blends with red peonies and silky sandalwood in this dreamy romantic fragrance.",
    price: 159,
    image: perfume4,
    rating: 4.6
  },
  {
    id: "5",
    name: "Ruby Enchantment",
    description: "Sparkling bergamot dances with ruby grapefruit and precious woods in this enchanting elixir.",
    price: 229,
    image: perfume5,
    rating: 4.8
  }
];

const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Our <span className="passion-gradient">Complete Collection</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Discover the perfect fragrance that speaks to your soul. Each perfume is crafted 
              with the finest ingredients to create an unforgettable olfactory experience.
            </p>
          </div>

          {/* Filter Options */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4">
              <button className="btn-passion">All Products</button>
              <button className="btn-outline-passion">Floral</button>
              <button className="btn-outline-passion">Oriental</button>
              <button className="btn-outline-passion">Woody</button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard 
                  {...product}
                  onClick={() => handleProductClick(product.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;