import { useRoute, Link } from "wouter";
import { Layout } from "@/components/Layout";
import { ArrowLeft, Box, Check, ChevronRight, Activity, Syringe } from "lucide-react";
import { useGetProduct } from "@workspace/api-client-react";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:categorySlug/:slug");
  const categorySlug = params?.categorySlug || "";
  const slug = params?.slug || "";

  const { data: product, isLoading, error } = useGetProduct(categorySlug, slug);

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-4 bg-muted w-32 rounded mb-8"></div>
            <div className="max-w-4xl mx-auto">
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

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col">
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
