import Navbar from "@/components/Navbar";
import { Heart, Sparkles, Crown } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: "Passion Series",
      description: "Intense and captivating fragrances that embody pure desire and romance.",
      icon: <Heart className="w-8 h-8" />,
      products: 5,
      featured: true
    },
    {
      id: 2,
      name: "Luxury Edition",
      description: "Premium fragrances crafted with the world's rarest and most exquisite ingredients.",
      icon: <Crown className="w-8 h-8" />,
      products: 3,
      featured: false
    },
    {
      id: 3,
      name: "Ethereal Dreams",
      description: "Light, dreamy scents that transport you to a world of fantasy and wonder.",
      icon: <Sparkles className="w-8 h-8" />,
      products: 4,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Exquisite <span className="passion-gradient">Collections</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Explore our carefully curated collections, each telling a unique story 
              through the art of fragrance. From passionate romance to ethereal dreams.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {collections.map((collection, index) => (
              <div 
                key={collection.id}
                className={`product-card p-8 text-center animate-fade-in ${collection.featured ? 'ring-2 ring-primary' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/10 text-primary">
                    {collection.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {collection.name}
                </h3>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {collection.description}
                </p>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-foreground/60">
                    {collection.products} Products
                  </span>
                  {collection.featured && (
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <button className="btn-outline-passion w-full">
                  Explore Collection
                </button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Can't decide? <span className="passion-gradient">Let us help you</span>
            </h2>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Take our fragrance quiz to find the perfect scent that matches your personality and style.
            </p>
            <button className="btn-passion">
              Take Fragrance Quiz
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;