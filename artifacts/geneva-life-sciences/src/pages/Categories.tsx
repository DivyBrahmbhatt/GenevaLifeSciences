import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { ArrowRight, Layers } from "lucide-react";
import { useGetCategories } from "@workspace/api-client-react";

export default function Categories() {
  const { data: categories, isLoading, error } = useGetCategories();

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Therapeutic Categories</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our vast range of products organized by therapeutic segment and preparation type.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 h-40 animate-pulse" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-12">Failed to load categories.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories?.map((cat) => (
              <Link 
                key={cat.id} 
                href={`/products/${cat.slug}`}
                className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors pointer-events-none" />
                
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{cat.productCount} Products</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow relative z-10">
                  {cat.description}
                </p>

                <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform relative z-10">
                  View Products <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
