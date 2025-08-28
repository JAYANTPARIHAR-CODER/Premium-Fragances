import Navbar from "@/components/Navbar";
import { Sparkles, Heart, Award, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Heart className="w-6 h-6" />, value: "50k+", label: "Happy Customers" },
    { icon: <Award className="w-6 h-6" />, value: "15+", label: "Awards Won" },
    { icon: <Sparkles className="w-6 h-6" />, value: "100+", label: "Unique Fragrances" },
    { icon: <Users className="w-6 h-6" />, value: "25+", label: "Expert Perfumers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              About <span className="passion-gradient">LovableScents</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Where passion meets perfection in the art of fragrance creation. 
              We craft scents that tell stories, evoke emotions, and create lasting memories.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="passion-gradient">Story</span>
              </h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Founded in 2010 by master perfumer Isabella Rosé, LovableScents began as a dream 
                to create fragrances that capture the essence of love, passion, and romance. 
                Starting in a small atelier in Paris, we've grown into a beloved brand known 
                for our exquisite craftsmanship and attention to detail.
              </p>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Each fragrance in our collection is meticulously crafted using the finest 
                ingredients sourced from around the world. From Bulgarian roses to Indonesian 
                patchouli, we spare no expense in creating scents that are truly extraordinary.
              </p>
              <button className="btn-passion">
                Learn More About Our Process
              </button>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-card rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-24 h-24 text-primary mb-4 mx-auto animate-glow-pulse" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Crafted with Love</h3>
                  <p className="text-foreground/70">Every bottle tells a story</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 animate-fade-in">
              Our <span className="passion-gradient">Mission</span>
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              To create fragrances that not only smell beautiful but also connect people 
              to their deepest emotions and most cherished memories. We believe that the 
              right scent has the power to transform moments into memories, and we're 
              passionate about being part of your love story.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;