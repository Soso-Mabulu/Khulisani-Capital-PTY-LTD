import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Abstract background representing financial services"
        data-ai-hint="professional office abstract"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-brand/80 -z-10" />

      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Businesses with Strategic Financial Clarity
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Precision-driven advisory solutions in tax, audit, accounting, valuations, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#services">Our Services</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
