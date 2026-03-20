import { useState } from "react";
import { Layout } from "@/components/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";

// Form validation schema matching API spec
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Please enter a detailed message"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const mutation = useSubmitContact({
    mutation: {
      onSuccess: () => {
        setSuccess(true);
        reset();
        // Reset success state after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      }
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate({ data });
  };

  return (
    <Layout>
      <div className="bg-slate-50 py-16 lg:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team to inquire about our products, manufacturing capabilities, or partnership opportunities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Corporate Office & Manufacturing</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Address</h4>
                    <p className="text-muted-foreground mt-1">F 13, Saket Business Hub,<br />Panchot, Mahesana,<br />Gujarat, India, 384205</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phone</h4>
                    <p className="text-muted-foreground mt-1">+91 93160 92829<br />+91 84016 12403</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-muted-foreground mt-1">hello@genevalifesciences.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-3xl border border-border shadow-xl p-8 lg:p-12 relative overflow-hidden">
              {/* Success Overlay */}
              {success && (
                <div className="absolute inset-0 bg-card/95 backdrop-blur z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground">Thank you for contacting us. A representative will get back to you shortly.</p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-8 px-6 py-2 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              )}

              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>

              {mutation.isError && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 mb-8 border border-red-100">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Error</h4>
                    <p className="text-sm">Something went wrong while sending your message. Please try again.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                    <input
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl bg-background border-2 ${errors.name ? 'border-red-400 focus:ring-red-100' : 'border-border focus:border-primary focus:ring-primary/10'} text-foreground focus:outline-none focus:ring-4 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                    <input
                      {...register("email")}
                      type="email"
                      className={`w-full px-4 py-3 rounded-xl bg-background border-2 ${errors.email ? 'border-red-400 focus:ring-red-100' : 'border-border focus:border-primary focus:ring-primary/10'} text-foreground focus:outline-none focus:ring-4 transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                    <input
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:border-primary focus:ring-primary/10 focus:outline-none focus:ring-4 transition-all text-foreground"
                      placeholder="+91 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Company / Organization</label>
                    <input
                      {...register("company")}
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:border-primary focus:ring-primary/10 focus:outline-none focus:ring-4 transition-all text-foreground"
                      placeholder="Healthcare Ltd."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Your Message *</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-background border-2 ${errors.message ? 'border-red-400 focus:ring-red-100' : 'border-border focus:border-primary focus:ring-primary/10'} text-foreground focus:outline-none focus:ring-4 transition-all resize-y`}
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
