import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We're here to help. Reach out to us with any questions or to schedule a consultation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-headline">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
            </div>
            <div className="space-y-4">
                <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-md">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:info@kulisani.co.za" className="text-muted-foreground hover:text-primary">info@kulisani.co.za</a>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-md">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href="tel:+27123456789" className="text-muted-foreground hover:text-primary">+27 12 345 6789</a>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-md">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Office</h3>
                        <p className="text-muted-foreground">Pretoria, South Africa</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
            <form className="space-y-6 bg-card p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="first-name">First Name</label>
                        <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="last-name">Last Name</label>
                        <Input id="last-name" placeholder="Doe" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message">Message</label>
                    <Textarea id="message" placeholder="Your message..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                    Send Message
                </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
