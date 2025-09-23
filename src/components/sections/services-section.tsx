import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenCheck, Scaling, Receipt, ShieldCheck, AreaChart, Cog, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        icon: <BookOpenCheck className="h-6 w-6 text-brand-primary" />,
        title: "Accounting & Technical Advisory",
        description: "Expert guidance on IFRS, complex group consolidations, and evolving accounting standards.",
        color: "bg-blue-50",
        iconBg: "bg-blue-100"
    },
    {
        icon: <Scaling className="h-6 w-6 text-brand-primary" />,
        title: "Valuations & Due Diligence",
        description: "Robust support for transactions with business valuations, financial due diligence, and deal structuring.",
        color: "bg-green-50",
        iconBg: "bg-green-100"
    },
    {
        icon: <Receipt className="h-6 w-6 text-brand-primary" />,
        title: "Tax Advisory",
        description: "Navigate the tax landscape with corporate tax planning, regulatory engagement, and dispute resolution support.",
        color: "bg-purple-50",
        iconBg: "bg-purple-100"
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-brand-primary" />,
        title: "Audit Readiness & Review",
        description: "Prepare for successful audits with internal control assessments and pre-issuance quality reviews.",
        color: "bg-orange-50",
        iconBg: "bg-orange-100"
    },
    {
        icon: <AreaChart className="h-6 w-6 text-brand-primary" />,
        title: "Financial Modelling & Forecasting",
        description: "Turn data into decision-making tools with bespoke financial models and scenario planning.",
        color: "bg-yellow-50",
        iconBg: "bg-yellow-100"
    },
    {
        icon: <Cog className="h-6 w-6 text-brand-primary" />,
        title: "Business Automation & IT Solutions",
        description: "Modernize finance functions through low-code automation, advanced Excel, and digital transformation.",
        color: "bg-pink-50",
        iconBg: "bg-pink-100"
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1.5 rounded-full text-sm mb-4">
                        <BookOpenCheck className="w-3 h-3" />
                        <span>Our Services</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
                        Comprehensive Financial
                        <span className="block text-brand-primary">Advisory Solutions</span>
                    </h2>
                    <p className="text-base text-brand-black/70 max-w-2xl mx-auto">
                        Professional services designed to deliver clarity, compliance, and strategic advantage to elevate your business performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {services.map((service, index) => (
                        <Card key={index} className="group p-6 bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-brand-primary/30">
                            <div className="space-y-4">
                                <div className={`w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-lg text-brand-black group-hover:text-brand-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-brand-black/70 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button 
                        className="bg-brand-primary hover:bg-brand-purple-600 text-white px-6 py-3"
                        asChild
                    >
                        <Link href="/services">
                            Explore All Services
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}