"use client";

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Teams', href: '/#teams' },
  { name: 'Values', href: '/#values' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Careers', href: '/careers' },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-accent/20 bg-white/95 backdrop-blur-md shadow-brand">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple-50/30 to-transparent"></div>
      
      <div className="container flex h-16 items-center relative z-10">
        <div className="flex items-center md:flex-1">
           <div className="hover-brand-lift">
             <Logo />
           </div>
        </div>
        
        <nav className="hidden md:flex flex-1 justify-center">
            <ul className='flex items-center gap-8'>
                {navItems.map((item, index) => (
                <li key={item.name}>
                    <Link
                        href={item.href}
                        className="text-sm font-medium text-gray-600 transition-all duration-300 hover:text-brand-primary relative group py-2"
                    >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent/50 transition-all duration-500 group-hover:w-full rounded-full" style={{transitionDelay: '100ms'}}></span>
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
          
        <div className="flex flex-1 items-center justify-end gap-3">
             <Button className="bg-brand-primary hover:bg-brand-purple-600 text-white shadow-brand hover-brand-lift ripple-brand relative overflow-hidden" asChild>
                <Link href="/contact">
                  <span className="relative z-10">Contact Us</span>
                </Link>
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-brand-primary hover:bg-brand-purple-50 hover:scale-110 transition-all duration-300">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-brand-gradient-card border-brand-accent/20 shadow-brand-xl">
                <div className="p-4">
                    <div className="flex justify-between items-center mb-10">
                        <Logo />
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-primary hover:bg-brand-purple-50 hover:scale-110 transition-all duration-300">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close Menu</span>
                        </Button>
                    </div>
                  <nav className="flex flex-col space-y-6">
                    {navItems.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-brand-black hover:text-brand-primary transition-all duration-300 hover:translate-x-2 py-2 border-b border-brand-accent/20 hover:border-brand-primary/50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                   <Button className="w-full mt-10 bg-brand-primary hover:bg-brand-purple-600 text-white shadow-brand hover-brand-lift ripple-brand" asChild>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                    </Button>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
