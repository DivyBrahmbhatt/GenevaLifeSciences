import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Activity, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Categories", href: "/categories" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 sm:px-6 lg:px-8 text-sm font-medium hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 123 456 7890</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@genevalifesciences.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>ISO 9001 & GMP Certified Manufacturing</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-lg border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl leading-tight text-foreground">Geneva Life Sciences</h1>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Private Limited</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location === link.href || (link.href !== '/' && location.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold transition-colors duration-200 hover:text-primary relative py-2",
                    isActive ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
                  )}
                </Link>
              );
            })}
            <Link 
              href="/products" 
              className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              View Catalog
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-foreground/80 hover:bg-muted rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-card border-b border-border shadow-xl py-4 px-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 text-base font-medium rounded-xl hover:bg-muted text-foreground flex items-center justify-between"
              >
                {link.name}
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-lg leading-none text-white">Geneva Life Sciences</h2>
                </div>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                Committed to delivering high-quality, innovative medical products to improve lives globally. GMP & ISO Certified manufacturing.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/categories" className="hover:text-primary transition-colors">Therapeutic Categories</Link></li>
                <li><Link href="/products" className="hover:text-primary transition-colors">Product Directory</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Key Categories</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/products?category=prefilled-syringes" className="hover:text-primary transition-colors">Prefilled Syringes</Link></li>
                <li><Link href="/products?category=ophthalmic" className="hover:text-primary transition-colors">Ophthalmic Preparations</Link></li>
                <li><Link href="/products?category=cephalosporin" className="hover:text-primary transition-colors">Cephalosporin</Link></li>
                <li><Link href="/products?category=ointments-creams" className="hover:text-primary transition-colors">Ointments & Creams</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>123 Medical Innovation Park, Industrial Estate, Geneva City, 40001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+91 123 456 7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>info@genevalifesciences.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} Geneva Life Sciences Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
