import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-background overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/50 z-0"/>
       
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left animate-fade-in-up">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                    Strategic Financial Clarity
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
                    Precision-driven advisory in tax, audit, accounting, and valuations to empower your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" asChild>
                    <Link href="#services">
                        Our Services
                        <MoveRight className="ml-2" />
                    </Link>
                    </Button>
                    <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Request Consultation</Link>
                    </Button>
                </div>
            </div>
            <div className="relative h-80 md:h-[500px] flex items-center justify-center">
                 <div className="relative w-64 h-64 md:w-96 md:h-96 animate-fade-in">
                    <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-slow"></div>
                    <Image
                        src="/logo.jpg"
                        alt="Kulisani Capital Logo"
                        width={400}
                        height={400}
                        className="relative object-contain rounded-full shadow-2xl"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
