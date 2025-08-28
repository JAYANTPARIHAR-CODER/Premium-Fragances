import ProductCard from "./ProductCard";
import perfume1 from '@/assets/perfume-1.jpg';
import perfume2 from '@/assets/perfume-2.jpg';
import perfume3 from '@/assets/perfume-3.jpg';
import perfume4 from '@/assets/perfume-4.jpg';
import perfume5 from '@/assets/perfume-5.jpg';

const products = [
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

interface ProductsSectionProps {
  onProductClick: (productId: string) => void;
}

const ProductsSection = ({ onProductClick }: ProductsSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="passion-gradient">Signature Collection</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Each fragrance in our collection is carefully crafted to capture the essence of love, 
            passion, and timeless elegance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard 
                {...product}
                onClick={() => onProductClick(product.id)}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="btn-outline-passion">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;