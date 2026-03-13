import { useRoute, Link } from "wouter";
import { Layout } from "@/components/Layout";
import { ArrowLeft, Box, Check, ChevronRight, Activity, Syringe } from "lucide-react";
import { useGetProduct } from "@workspace/api-client-react";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:id");
  const productId = parseInt(params?.id || "0", 10);

  const { data: product, isLoading, error } = useGetProduct(productId, {
    query: { enabled: !!productId }
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-4 bg-muted w-32 rounded mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="aspect-square bg-muted rounded-3xl"></div>
              <div className="space-y-6 pt-8">
                <div className="h-6 bg-muted w-24 rounded"></div>
                <div className="h-10 bg-muted w-3/4 rounded"></div>
                <div className="h-32 bg-muted w-full rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or an error occurred.</p>
          <Link href="/products" className="text-primary font-semibold hover:underline">
            &larr; Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href={`/products?category=${product.categorySlug}`} className="hover:text-primary transition-colors">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Image Placeholder */}
          <div className="lg:col-span-5">
            <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl border border-border flex flex-col items-center justify-center p-8 shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] opacity-10 mix-blend-overlay"></div>
              
              {product.isPrefillSyringe ? (
                <Syringe className="w-32 h-32 text-primary/30 mb-6" />
              ) : (
                <Box className="w-32 h-32 text-primary/30 mb-6" />
              )}
              <div className="text-center relative z-10">
                <span className="text-lg font-bold text-slate-400">{product.name}</span>
                <p className="text-sm text-slate-500 mt-2">Product visualization unavailable</p>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-bold uppercase tracking-wider mb-4">
                {product.categoryName}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-4">
                {product.name}
              </h1>
              {product.genericName && (
                <p className="text-xl text-muted-foreground italic mb-6">
                  {product.genericName}
                </p>
              )}
            </div>

            <div className="prose prose-slate max-w-none text-foreground mb-10">
              <p className="text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Specialized Table for Prefilled Syringes */}
            {product.isPrefillSyringe && (
              <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden mb-10">
                <div className="bg-muted px-6 py-4 border-b border-border flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-foreground m-0">Prefilled Syringe Details</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50/50">
                      <tr>
                        <th className="px-6 py-3 font-semibold text-muted-foreground border-b">Generic Name</th>
                        <th className="px-6 py-3 font-semibold text-muted-foreground border-b border-l">Strength</th>
                        <th className="px-6 py-3 font-semibold text-muted-foreground border-b border-l">Container Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-6 py-4 font-medium">{product.genericName || "N/A"}</td>
                        <td className="px-6 py-4 border-l">{product.strength || "N/A"}</td>
                        <td className="px-6 py-4 border-l">{product.containerType || "N/A"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {product.specifications && (
                <div>
                  <h3 className="text-lg font-bold mb-3 border-b border-border pb-2">Specifications</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line">
                    {product.specifications}
                  </p>
                </div>
              )}
              
              {product.applications && (
                <div>
                  <h3 className="text-lg font-bold mb-3 border-b border-border pb-2">Applications</h3>
                  <ul className="space-y-2">
                    {product.applications.split('\n').filter(Boolean).map((app, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-auto pt-8 border-t border-border flex items-center justify-between">
              <Link 
                href="/products" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors -ml-4"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Directory
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all"
              >
                Inquire About Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
