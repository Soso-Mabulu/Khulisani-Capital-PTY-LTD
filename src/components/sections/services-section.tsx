import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenCheck, Scaling, Receipt, ShieldCheck, AreaChart, Cog } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: <BookOpenCheck className="h-8 w-8 text-brand-primary" />,
        title: "Accounting & Technical Advisory",
        description: "Expert guidance on IFRS, complex group consolidations, and evolving accounting standards.",
        gradientClass: "bg-brand-gradient-card",
        borderClass: "border-brand-gradient",
        accentColor: "bg-gradient-to-br from-brand-purple-100 to-brand-purple-50"
    },
    {
        icon: <Scaling className="h-8 w-8 text-brand-primary" />,
        title: "Valuations & Due Diligence",
        description: "Robust support for transactions with business valuations, financial due diligence, and deal structuring.",
        gradientClass: "bg-brand-gradient-accent",
        borderClass: "border-brand-gradient-animated",
        accentColor: "bg-gradient-to-br from-purple-100 to-white"
    },
    {
        icon: <Receipt className="h-8 w-8 text-brand-primary" />,
        title: "Tax Advisory",
        description: "Navigate the tax landscape with corporate tax planning, SARS engagement, and dispute resolution support.",
        gradientClass: "bg-brand-gradient-card",
        borderClass: "border-brand-gradient",
        accentColor: "bg-gradient-to-br from-brand-purple-100 to-brand-purple-50"
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-brand-primary" />,
        title: "Audit Readiness & Review",
        description: "Prepare for successful audits with internal control assessments and pre-issuance quality reviews.",
        gradientClass: "bg-brand-gradient-accent",
        borderClass: "border-brand-gradient-animated",
        accentColor: "bg-gradient-to-br from-purple-100 to-white"
    },
    {
        icon: <AreaChart className="h-8 w-8 text-brand-primary" />,
        title: "Financial Modelling & Forecasting",
        description: "Turn data into decision-making tools with bespoke financial models and scenario planning.",
        gradientClass: "bg-brand-gradient-card",
        borderClass: "border-brand-gradient",
        accentColor: "bg-gradient-to-br from-brand-purple-100 to-brand-purple-50"
    },
    {
        icon: <Cog className="h-8 w-8 text-brand-primary" />,
        title: "Business Automation & IT Solutions",
        description: "Modernize finance functions through low-code automation, advanced Excel, and digital transformation.",
        gradientClass: "bg-brand-gradient-accent",
        borderClass: "border-brand-gradient-animated",
        accentColor: "bg-gradient-to-br from-purple-100 to-white"
    }
]

export default function ServicesSection() {
    return (
        <section id="services" className="py-16 lg:py-24 bg-brand-gradient-services relative overflow-hidden">
            {/* Floating background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl float-brand"></div>
                <div className="absolute bottom-20 left-20 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl float-brand" style={{animationDelay: '3s'}}></div>
            </div>
            
            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                     <h2 className="font-headline text-3xl font-bold tracking-tight text-brand-black sm:text-4xl mb-4">
                        Our <span className="text-brand-gradient-vibrant">Services</span>
                    </h2>
                    <div className="w-20 h-1 bg-brand-gradient-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                       A dynamic range of professional services designed to deliver clarity, compliance, and strategic advantage to elevate your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className={`group flex flex-col ${service.gradientClass} ${service.borderClass} hover:shadow-brand-xl hover-brand-lift transition-all duration-500 border-2 relative overflow-hidden`}>
                            {/* Card hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <CardHeader className="relative z-10">
                                 <div className={`mb-6 p-4 rounded-xl ${service.accentColor} shadow-brand w-fit group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <CardTitle className="font-headline text-xl text-brand-black mb-3 group-hover:text-brand-primary transition-colors duration-300">{service.title}</CardTitle>
                                <CardDescription className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            
                            {/* Decorative corner element */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gradient-primary opacity-5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                        </Card>
                    ))}
                </div>
                
                {/* Call to action */}
                <div className="text-center mt-12">
                    <Button className="bg-brand-primary hover:bg-brand-purple-600 text-white shadow-brand-lg hover-brand-lift ripple-brand px-8 py-3" asChild>
                        <Link href="/contact">Discover How We Can Help</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
