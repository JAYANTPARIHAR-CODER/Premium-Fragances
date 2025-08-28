import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import perfume1 from '@/assets/perfume-1.jpg';
import perfume2 from '@/assets/perfume-2.jpg';
import perfume3 from '@/assets/perfume-3.jpg';
import perfume4 from '@/assets/perfume-4.jpg';
import perfume5 from '@/assets/perfume-5.jpg';
import jasmineWhisper from '@/assets/Jasmine Whisper.jpeg';
import roseVelvet from '@/assets/Rose Velvet.avif';
import blackOrchid from '@/assets/Black Orchid.avif';
import amberMystique from '@/assets/Amber Mystique.jpeg';
import citrusZest from '@/assets/Citrus Zest.jpeg';
import noirObsession from '@/assets/Noir Obsession.jpeg';
import oudRoyal from '@/assets/Oud Royal.jpeg';
import rubyEnchantment from '@/assets/Ruby Enchantment.jpeg';
import vanillaNocturne from '@/assets/Vanilla Nocturne.jpeg';
import oceanBreeze from '@/assets/Ocean Breeze.jpeg';
import sandalwoodSerenity from '@/assets/Sandalwood Serenity.jpeg';

type Category = 'all' | 'floral' | 'woody' | 'oriental' | 'citrus' | 'fresh';

const allProducts = [
  {
    id: "1",
    name: "Midnight Romance",
    description: "A captivating blend of dark berries, velvet roses, and mysterious musk that awakens your deepest desires.",
    price: 199,
    image: perfume1,
    rating: 4.8,
    categories: ['floral', 'oriental']
  },
  {
    id: "2", 
    name: "Passion Rouge",
    description: "Fiery notes of red jasmine, cherry blossom, and warm amber create an irresistible aura of seduction.",
    price: 249,
    image: perfume2,
    rating: 4.9,
    categories: ['floral', 'oriental']
  },
  {
    id: "3",
    name: "Velvet Desire",
    description: "Luxurious vanilla orchid meets spicy cinnamon and soft cashmere for an unforgettable sensual experience.",
    price: 179,
    image: perfume3,
    rating: 4.7,
    categories: ['oriental', 'woody']
  },
  {
    id: "4",
    name: "Crimson Dreams",
    description: "Ethereal white tea blends with red peonies and silky sandalwood in this dreamy romantic fragrance.",
    price: 159,
    image: perfume4,
    rating: 4.6,
    categories: ['floral', 'fresh']
  },
  {
    id: "5",
    name: "Ruby Enchantment",
    description: "Sparkling bergamot dances with ruby grapefruit and precious woods in this enchanting elixir.",
    price: 229,
    image: rubyEnchantment,
    rating: 4.8,
    categories: ['citrus', 'woody']
  },
  {
    id: "6",
    name: "Noir Obsession",
    description: "A mysterious blend of black vanilla, dark chocolate, and smoky oud for a seductive evening scent.",
    price: 279,
    image: noirObsession,
    rating: 4.9,
    categories: ['oriental', 'woody']
  },
  {
    id: "7",
    name: "Jasmine Whisper",
    description: "Delicate white jasmine petals blended with fresh pear and creamy sandalwood for a soft, romantic aura.",
    price: 199,
    image: jasmineWhisper,
    rating: 4.7,
    categories: ['floral', 'fresh']
  },
  {
    id: "8",
    name: "Amber Mystique",
    description: "Warm amber, vanilla bean, and a hint of saffron create a rich, intoxicating fragrance.",
    price: 259,
    image: amberMystique,
    rating: 4.8,
    categories: ['oriental']
  },
  {
    id: "9",
    name: "Citrus Zest",
    description: "A refreshing burst of Italian lemon, bergamot, and mandarin with a hint of vetiver.",
    price: 189,
    image: citrusZest,
    rating: 4.6,
    categories: ['citrus', 'fresh']
  },
  {
    id: "10",
    name: "Oud Royal",
    description: "Luxurious agarwood, rose absolute, and saffron create this opulent, long-lasting fragrance.",
    price: 299,
    image: oudRoyal,
    rating: 4.9,
    categories: ['oriental', 'woody']
  },
  {
    id: "11",
    name: "Vanilla Nocturne",
    description: "A warm embrace of Madagascar vanilla, tonka bean, and creamy sandalwood for a comforting, sweet aroma.",
    price: 219,
    image: vanillaNocturne,
    rating: 4.8,
    categories: ['oriental', 'woody']
  },
  {
    id: "12",
    name: "Ocean Breeze",
    description: "Crisp marine notes blend with sea salt and driftwood for a fresh, aquatic fragrance that evokes the ocean.",
    price: 189,
    image: oceanBreeze,
    rating: 4.6,
    categories: ['fresh', 'citrus']
  },
  {
    id: "13",
    name: "Black Orchid",
    description: "An intoxicating blend of black truffle, black orchid, and patchouli for a mysterious, luxurious scent.",
    price: 279,
    image: blackOrchid,
    rating: 4.9,
    categories: ['oriental', 'floral']
  },
  {
    id: "14",
    name: "Sandalwood Serenity",
    description: "Creamy sandalwood, warm amber, and a hint of lavender create a calming, sophisticated fragrance.",
    price: 239,
    image: sandalwoodSerenity,
    rating: 4.7,
    categories: ['woody', 'oriental']
  },
  {
    id: "15",
    name: "Rose Velvet",
    description: "Luscious Bulgarian rose petals, peony, and a touch of honey for a romantic, feminine scent.",
    price: 249,
    image: roseVelvet,
    rating: 4.8,
    categories: ['floral', 'fresh']
  }
];

const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const categories: { id: Category; name: string }[] = [
    { id: 'all', name: 'All Perfumes' },
    { id: 'floral', name: 'Floral' },
    { id: 'woody', name: 'Woody' },
    { id: 'oriental', name: 'Oriental' },
    { id: 'citrus', name: 'Citrus' },
    { id: 'fresh', name: 'Fresh' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter(product => product.categories.includes(selectedCategory));

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

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="animate-fade-in"
              >
                <ProductCard 
                  {...product}
                  onClick={() => handleProductClick(product.id)}
                />
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No perfumes found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;