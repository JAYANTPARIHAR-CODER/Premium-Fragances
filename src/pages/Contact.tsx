import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@lovablescents.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Monday to Friday, 9 AM - 6 PM"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "123 Fragrance Avenue, Paris, France",
      description: "Our flagship boutique"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Store Hours",
      content: "Mon-Sat: 10 AM - 8 PM",
      description: "Sunday: 12 PM - 6 PM"
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
              Get In <span className="passion-gradient">Touch</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Have questions about our fragrances? Need personalized recommendations? 
              We'd love to hear from you and help you find your perfect scent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8">
                Send Us a <span className="passion-gradient">Message</span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                    <option>General Inquiry</option>
                    <option>Product Question</option>
                    <option>Custom Fragrance Request</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-passion w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-3xl font-bold mb-8">
                Contact <span className="passion-gradient">Information</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-foreground/90 font-medium">{info.content}</p>
                      <p className="text-sm text-foreground/60">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-card border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Stay Connected
                </h3>
                <p className="text-foreground/80 mb-4">
                  Subscribe to our newsletter for exclusive offers and new fragrance releases.
                </p>
                <div className="flex space-x-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                  <button className="btn-passion">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;