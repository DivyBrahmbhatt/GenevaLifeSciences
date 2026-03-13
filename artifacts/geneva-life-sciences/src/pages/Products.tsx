import { useState, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { Layout } from "@/components/Layout";
import { Search, Filter, Box, AlertCircle } from "lucide-react";
import { useGetProducts, useGetCategories } from "@workspace/api-client-react";

export default function Products() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialCategory = searchParams.get('category') || '';

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const { data: categories, isLoading: isLoadingCategories } = useGetCategories();
  
  // Use debounced search or just pass directly
  const { data: products, isLoading: isLoadingProducts, error } = useGetProducts({
    search: search || undefined,
    category: selectedCategory || undefined
  });

  // Unique categories for the sidebar if API isn't ready
  const activeCategories = useMemo(() => {
    if (categories) return categories;
    return [];
  }, [categories]);

  return (
    <Layout>
      <div className="bg-slate-50 py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-foreground">Product Directory</h1>
          <p className="text-muted-foreground mt-2">Browse our complete range of medical products and pharmaceutical preparations.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-card rounded-2xl border border-border p-6 shadow-sm sticky top-28">
            <h2 className="font-bold flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-primary" /> 
              Categories
            </h2>
            
            {isLoadingCategories ? (
              <div className="space-y-3">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="h-6 bg-muted rounded animate-pulse" />
                ))}
              </div>
            ) : (
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setSelectedCategory("")}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === "" 
                        ? "bg-primary text-primary-foreground font-semibold" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    All Products
                  </button>
                </li>
                {activeCategories.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex justify-between items-center ${
                        selectedCategory === cat.slug 
                          ? "bg-primary text-primary-foreground font-semibold" 
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                        selectedCategory === cat.slug ? "bg-white/20" : "bg-muted-foreground/10"
                      }`}>
                        {cat.productCount}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="mb-8 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products by name, generic name, or description..."
              className="block w-full pl-11 pr-4 py-4 border-2 border-border rounded-2xl bg-card text-foreground placeholder-muted-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm"
            />
          </div>

          {/* Results Grid */}
          {isLoadingProducts ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="bg-card rounded-2xl border border-border p-6 h-64 animate-pulse flex flex-col">
                  <div className="w-16 h-16 bg-muted rounded-xl mb-4" />
                  <div className="h-5 bg-muted rounded w-3/4 mb-3" />
                  <div className="h-4 bg-muted rounded w-1/4 mb-6" />
                  <div className="h-16 bg-muted rounded w-full mt-auto" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-600 p-8 rounded-2xl flex flex-col items-center justify-center text-center border border-red-100">
              <AlertCircle className="w-12 h-12 mb-4 text-red-500" />
              <h3 className="text-lg font-bold mb-2">Failed to load products</h3>
              <p>Please try again later or contact support if the issue persists.</p>
            </div>
          ) : products?.length === 0 ? (
            <div className="bg-slate-50 border border-dashed border-border p-16 rounded-3xl flex flex-col items-center justify-center text-center">
              <Box className="w-16 h-16 mb-4 text-muted-foreground/50" />
              <h3 className="text-xl font-bold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search query or category filter.</p>
              {(search || selectedCategory) && (
                <button 
                  onClick={() => { setSearch(""); setSelectedCategory(""); }}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products?.map(product => (
                <Link 
                  key={product.id} 
                  href={`/products/${product.id}`}
                  className="bg-card group rounded-2xl border border-border/60 p-6 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    <Box className="w-6 h-6" />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-md mb-3 uppercase tracking-wider">
                      {product.categoryName}
                    </span>
                    <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3 mt-2 flex-grow">
                    {product.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-border/50 text-sm font-semibold text-primary flex items-center">
                    View Details
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
