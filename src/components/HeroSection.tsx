import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import heroImage from '@/assets/hero-perfume.jpg';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleExploreClick = () => {
    if (isAuthenticated) {
      navigate('/products');
    } else {
      navigate('/login', { state: { from: '/products' } });
    }
  };
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="hero-title mb-6 leading-tight">
            Discover Your
            <span className="block passion-gradient">
              Lovable Signature Scent
            </span>
          </h1>
          
          <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
            Indulge in our curated collection of luxury perfumes that capture 
            the essence of passion, romance, and elegance. Each fragrance tells 
            a unique story of love and desire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="btn-passion"
              onClick={handleExploreClick}
            >
              Explore Collections
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-passion"
            >
              View Featured
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-32 left-32 w-6 h-6 bg-primary/50 rounded-full animate-float delay-1000 opacity-40"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full animate-float delay-500 opacity-80"></div>
    </section>
  );
};

export default HeroSection;