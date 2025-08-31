import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-background">
       <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/50 -z-10"/>
       <Image
         src="https://picsum.photos/1920/1280"
         alt="Abstract background representing financial services"
         data-ai-hint="professional office abstract"
         fill
         className="object-cover -z-20 opacity-5"
         priority
       />

      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
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
            <div className="relative h-80 md:h-[500px] hidden md:block">
                 <Image
                    src="https://picsum.photos/800/600"
                    alt="Financial professionals in a meeting"
                    data-ai-hint="finance meeting business"
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
