import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12.52.02c1.31-.02 2.61.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.31 1.73v3.25c-1.93.03-3.85-.42-5.55-1.39-1.48-.83-2.8-2.02-3.81-3.48v6.42c0 1.93-.78 3.84-2.2 5.25-1.42 1.4-3.33 2.18-5.26 2.18-1.93 0-3.84-.78-5.25-2.2-1.4-1.42-2.18-3.33-2.18-5.26 0-1.93.78-3.84 2.2-5.25 1.42-1.4 3.33-2.18 5.26-2.18 1.93 0 3.84.78 5.25 2.2v-6.9c-1.43-.91-2.68-2.1-3.66-3.51z"></path>
    </svg>
)

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-card text-card-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4 md:col-span-1">
            <Logo />
            <p className="text-sm text-muted-foreground">
                Empowering businesses with precision-driven financial and strategic advisory solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:col-span-3">
            <div>
              <h3 className="font-headline font-semibold text-foreground">Navigate</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/#about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
                <li><Link href="/#teams" className="text-sm text-muted-foreground hover:text-primary">Teams</Link></li>
                <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-foreground">Contact Us</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:info@kulisani.co.za" className="hover:text-primary">info@kulisani.co.za</a></li>
                <li><a href="tel:+27123456789" className="hover:text-primary">+27 12 345 6789</a></li>
                <li>Pretoria, South Africa</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Kulisani Capital (Pty) Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="TikTok"><TikTokIcon className="h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
