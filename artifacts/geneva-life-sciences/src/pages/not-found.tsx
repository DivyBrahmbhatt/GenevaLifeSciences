import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center py-24 px-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-12 h-12" />
          </div>
          <h1 className="text-6xl font-display font-extrabold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
``