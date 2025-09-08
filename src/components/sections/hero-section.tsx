import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-brand-gradient-hero overflow-hidden">
       {/* Floating decorative elements */}
       <div className="absolute inset-0 z-0">
         <div className="absolute top-20 left-10 w-32 h-32 bg-brand-accent/20 rounded-full blur-xl float-brand"></div>
         <div className="absolute top-40 right-20 w-24 h-24 bg-brand-primary/10 rounded-full blur-lg float-brand" style={{animationDelay: '2s'}}></div>
         <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-brand-accent/15 rounded-full blur-2xl float-brand" style={{animationDelay: '4s'}}></div>
       </div>
       
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center md:text-left animate-fade-in-up">
                <div className="space-y-4">
                  <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-brand-black leading-tight">
                      Strategic Financial 
                      <span className="text-brand-gradient-vibrant block mt-2"> Clarity</span>
                  </h1>
                  <div className="w-24 h-1 bg-brand-gradient-primary rounded-full mx-auto md:mx-0"></div>
                </div>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
                    Precision-driven advisory in tax, audit, accounting, and valuations to empower your business with strategic excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                    <Button size="lg" className="bg-brand-primary hover:bg-brand-purple-600 text-white shadow-brand-lg hover-brand-lift ripple-brand" asChild>
                    <Link href="#services">
                        Our Services
                        <MoveRight className="ml-2" />
                    </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-brand-gradient-animated text-brand-primary hover:bg-brand-primary hover:text-white shadow-brand" asChild>
                    <Link href="/contact">Request Consultation</Link>
                    </Button>
                </div>
            </div>
            <div className="relative h-80 md:h-[500px] flex items-center justify-center">
                 <div className="relative w-64 h-64 md:w-96 md:h-96 animate-fade-in">
                    {/* Multiple layered backgrounds for depth */}
                    <div className="absolute inset-0 rounded-full bg-brand-gradient-primary opacity-15 animate-pulse-slow scale-110"></div>
                    <div className="absolute inset-0 rounded-full bg-brand-gradient-accent opacity-25 animate-pulse-slow scale-105" style={{animationDelay: '1s'}}></div>
                    <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
                    {/* Logo with enhanced styling */}
                    <div className="relative w-full h-full border-brand-gradient-animated rounded-full p-2">
                      <Image
                          src="/logo.jpg"
                          alt="Kulisani Capital Logo"
                          width={400}
                          height={400}
                          className="relative object-contain rounded-full shadow-brand-xl hover-brand-lift w-full h-full"
                      />
                    </div>
                    {/* Floating accent elements around logo */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-accent rounded-full shadow-brand float-brand"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-brand-primary/20 rounded-full shadow-brand float-brand" style={{animationDelay: '3s'}}></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
