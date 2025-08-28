import { Heart, Search, ShoppingBag, User, LogOut, ChevronDown, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { itemCount, toggleCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Link to="/">
                <Heart className="h-8 w-8 text-primary" />
              </Link>
              <Link to="/" className="text-2xl font-bold passion-gradient">
                LovableScents
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`nav-link ${location.pathname === "/" ? "text-primary" : ""}`}>
                Home
              </Link>
              <Link to="/products" className={`nav-link ${location.pathname === "/products" ? "text-primary" : ""}`}>
                Products
              </Link>
              <Link to="/collections" className={`nav-link ${location.pathname === "/collections" ? "text-primary" : ""}`}>
                Collections
              </Link>
              <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "text-primary" : ""}`}>
                About
              </Link>
              <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "text-primary" : ""}`}>
                Contact
              </Link>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg p-2 z-10">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-3 py-1.5 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    autoFocus
                  />
                </div>
              )}
            </div>
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1 p-1 h-auto">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {user?.name?.charAt(0).toUpperCase() || <User className="h-4 w-4" />}
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {user?.name && (
                    <div className="px-2 py-1.5 text-sm font-medium">
                      {user.name}
                    </div>
                  )}
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/login', { state: { from: location.pathname } })}
              >
                Sign In
              </Button>
            )}
            
            <button 
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative"
              onClick={toggleCart}
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;