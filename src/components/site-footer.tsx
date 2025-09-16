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
    <footer id="contact-section" className="relative bg-white overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-primary"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-24 h-24 bg-brand-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-brand-primary/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container py-6 lg:py-8 relative z-10">
        {/* Streamlined main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Company info - simplified */}
          <div className="space-y-4">
            <div className="hover-brand-lift">
              <Logo />
            </div>
            <p className="text-white/80 leading-relaxed max-w-lg">
              Empowering businesses with precision-driven financial solutions that drive sustainable growth.
            </p>
            
            {/* Compact contact info */}
            <div className="space-y-2 pt-2">
              <a href="mailto:info@kulisanicapital.com" className="text-white/70 hover:text-brand-accent transition-colors text-sm block">
                info@kulisanicapital.com
              </a>
              <div className="space-y-1">
                <a href="tel:+27722243956" className="text-white/70 hover:text-brand-accent transition-colors text-sm block">
                  +27 72 224 3956
                </a>
                <a href="tel:+27823382653" className="text-white/70 hover:text-brand-accent transition-colors text-sm block">
                  +27 82 338 2653
                </a>
                <a href="tel:+27839795640" className="text-white/70 hover:text-brand-accent transition-colors text-sm block">
                  +27 83 979 5640
                </a>
              </div>
              <span className="text-white/70 text-sm block">109 Leeuwkop Rd, 123 The Kanyin, Sandton, Gauteng, 2191</span>
            </div>
          </div>
          
          {/* Navigation - streamlined */}
          <div className="grid grid-cols-2 gap-6">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-headline font-medium text-white relative text-sm">
                Quick Links
                <div className="absolute -bottom-1 left-0 w-6 h-0.5 bg-brand-accent rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/#services' },
                  { label: 'Team', href: '/#teams' },
                  { label: 'Contact', href: '/contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 text-sm inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-headline font-medium text-white relative text-sm">
                Services
                <div className="absolute -bottom-1 left-0 w-6 h-0.5 bg-brand-accent rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {[
                  'Tax Advisory',
                  'Audit Services',
                  'Valuations',
                  'Financial Modeling'
                ].map((service, index) => (
                  <li key={index}>
                    <span className="text-white/70 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom section - simplified */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/60 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Kulisani Capital (Pty) Ltd. All rights reserved.
            </p>
            
            {/* Social media - compact */}
            <div className="flex items-center gap-2">
              {[
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: TikTokIcon, label: "TikTok", href: "#" }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-brand-accent/20 hover:border-brand-accent/30 hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
