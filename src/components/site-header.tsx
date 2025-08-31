"use client";

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Teams', href: '/#teams' },
  { name: 'Values', href: '/#values' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Careers', href: '/careers' },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="flex items-center md:flex-1">
           <Logo />
        </div>
        
        <nav className="hidden md:flex flex-1 justify-center">
            <ul className='flex items-center gap-6'>
                {navItems.map((item) => (
                <li key={item.name}>
                    <Link
                        href={item.href}
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        {item.name}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
          
        <div className="flex flex-1 items-center justify-end gap-2">
             <Button asChild>
                <Link href="/contact">Contact Us</Link>
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                    <div className="flex justify-between items-center mb-8">
                        <Logo />
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close Menu</span>
                        </Button>
                    </div>
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-foreground"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                   <Button asChild className='w-full mt-8'>
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
