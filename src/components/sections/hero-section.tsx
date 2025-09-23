import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Briefcase, TrendingUp, Shield, Users, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-[85vh] relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-3 gap-1">
        <div className="relative opacity-20">
          <Image
            src="/images/friendly-african-american-staff-taking-pictures-corporate-office.jpg"
            alt="Business meeting"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative opacity-15">
          <Image
            src="/images/woman-8797459_1280.jpg"
            alt="Professional woman"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative opacity-20 hidden lg:block">
          <Image
            src="/images/intercultural-hand-shake-outdoor.jpg"
            alt="Professional consultation"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85"></div>
      
      <div className="container mx-auto px-4 pt-16 lg:pt-24 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 order-1 lg:order-1">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1.5 rounded-full text-sm">
                <Building className="w-3 h-3" />
                Professional Financial Services
              </div>
              
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-black leading-tight">
                Building Financial
                <span className="block text-brand-primary">
                  Excellence Together
                </span>
              </h1>
              
              <p className="text-base lg:text-lg text-brand-black/70 leading-relaxed">
                Kulisani Capital – where "working together" meets exceptional financial expertise. 
                We deliver comprehensive corporate finance, accounting, and business solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="bg-brand-primary hover:bg-brand-purple-600 text-white px-6 py-3"
                asChild
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-6 py-3"
                asChild
              >
                <Link href="/services">
                  Our Services
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-accent/20">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-brand-primary">25+</div>
                <div className="text-xs lg:text-sm text-brand-black/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-brand-primary">500+</div>
                <div className="text-xs lg:text-sm text-brand-black/60">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-brand-primary">98%</div>
                <div className="text-xs lg:text-sm text-brand-black/60">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Enhanced Kenya Tree Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2">
            <div className="relative group w-full max-w-sm lg:max-w-none">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-brand-primary/10 to-green-200/20 rounded-[2rem] lg:rounded-[2.5rem] blur-lg lg:blur-xl group-hover:blur-xl lg:group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[480px] xl:w-[420px] xl:h-[520px] mx-auto">
                <Image
                  src="/images/kenya-tree.webp"
                  alt="Majestic Kenyan tree - Symbol of growth and strength"
                  fill
                  className="rounded-2xl lg:rounded-3xl object-cover shadow-xl lg:shadow-2xl group-hover:shadow-2xl lg:group-hover:shadow-3xl transition-all duration-500 border-2 lg:border-4 border-white/50"
                  priority
                />
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 rounded-2xl lg:rounded-3xl"></div>
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl ring-1 ring-white/20 ring-inset"></div>
              </div>
              
              {/* Enhanced Floating Card - Mobile Responsive */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-xl lg:shadow-2xl border border-gray-100/50 max-w-xs group-hover:shadow-2xl lg:group-hover:shadow-3xl group-hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-brand-primary/20 to-green-500/20 rounded-lg lg:rounded-xl flex items-center justify-center">
                    <Building className="w-5 h-5 lg:w-7 lg:h-7 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs lg:text-sm text-brand-black mb-1">African Excellence</h3>
                    <p className="text-xs text-brand-black/60 leading-relaxed">Deep roots, growing strong</p>
                  </div>
                </div>
              </div>
              
              {/* Additional Accent Element - Responsive */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-6 h-6 lg:w-8 lg:h-8 bg-brand-primary/20 rounded-full blur-sm"></div>
              <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-3 h-3 lg:w-4 lg:h-4 bg-brand-primary/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators - Responsive */}
      <div className="absolute bottom-4 left-4 hidden md:block z-20">
        <Card className="p-2 lg:p-3 bg-white/95 backdrop-blur-sm shadow-lg border-brand-accent/20">
          <div className="flex items-center gap-2 text-xs lg:text-sm text-brand-black/70">
            <Shield className="w-3 h-3 lg:w-4 lg:h-4 text-brand-primary" />
            <span>SARB Regulated</span>
          </div>
        </Card>
      </div>

      <div className="absolute bottom-4 right-4 hidden md:block z-20">
        <Card className="p-2 lg:p-3 bg-white/95 backdrop-blur-sm shadow-lg border-brand-accent/20">
          <div className="flex items-center gap-2 text-xs lg:text-sm text-brand-black/70">
            <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-brand-primary" />
            <span>25+ Years Experience</span>
          </div>
        </Card>
      </div>

      {/* Mobile Trust Indicators */}
      <div className="block md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-2">
          <Card className="p-2 bg-white/95 backdrop-blur-sm shadow-lg border-brand-accent/20">
            <div className="flex items-center gap-1 text-xs text-brand-black/70">
              <Shield className="w-3 h-3 text-brand-primary" />
              <span>SARB</span>
            </div>
          </Card>
          <Card className="p-2 bg-white/95 backdrop-blur-sm shadow-lg border-brand-accent/20">
            <div className="flex items-center gap-1 text-xs text-brand-black/70">
              <TrendingUp className="w-3 h-3 text-brand-primary" />
              <span>25+ Years</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
