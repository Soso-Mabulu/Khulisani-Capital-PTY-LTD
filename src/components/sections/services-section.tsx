import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpenCheck, Scaling, Receipt, ShieldCheck, AreaChart, Cog } from "lucide-react";

const services = [
    {
        icon: <BookOpenCheck className="h-8 w-8 text-primary" />,
        title: "Accounting & Technical Advisory",
        description: "Expert guidance on IFRS, complex group consolidations, and evolving accounting standards.",
    },
    {
        icon: <Scaling className="h-8 w-8 text-primary" />,
        title: "Valuations & Due Diligence",
        description: "Robust support for transactions with business valuations, financial due diligence, and deal structuring.",
    },
    {
        icon: <Receipt className="h-8 w-8 text-primary" />,
        title: "Tax Advisory",
        description: "Navigate the tax landscape with corporate tax planning, SARS engagement, and dispute resolution support.",
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Audit Readiness & Review",
        description: "Prepare for successful audits with internal control assessments and pre-issuance quality reviews.",
    },
    {
        icon: <AreaChart className="h-8 w-8 text-primary" />,
        title: "Financial Modelling & Forecasting",
        description: "Turn data into decision-making tools with bespoke financial models and scenario planning.",
    },
    {
        icon: <Cog className="h-8 w-8 text-primary" />,
        title: "Business Automation & IT Solutions",
        description: "Modernize finance functions through low-code automation, advanced Excel, and digital transformation.",
    }
]

export default function ServicesSection() {
    return (
        <section id="services" className="py-16 lg:py-24 bg-background">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center">
                     <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Our Services
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                       A dynamic range of professional services designed to deliver clarity, compliance, and strategic advantage.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="flex flex-col bg-card/50 hover:bg-card/90 transition-colors">
                            <CardHeader>
                                 <div className="mb-4">
                                    {service.icon}
                                </div>
                                <CardTitle className="font-headline text-xl text-foreground">{service.title}</CardTitle>
                                <CardDescription className="pt-2 text-muted-foreground">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
