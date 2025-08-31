import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BookOpenCheck, Scaling, Receipt, ShieldCheck, AreaChart, Cog } from "lucide-react";

const services = [
    {
        icon: <BookOpenCheck className="h-8 w-8 text-primary" />,
        title: "Accounting & Technical Advisory",
        description: "We provide expert guidance on financial reporting and regulatory compliance, including:",
        points: [
            "IFRS implementation and interpretation",
            "Complex group consolidations",
            "Specialized insights for all the sectors",
            "Advisory on evolving accounting frameworks and standards"
        ]
    },
    {
        icon: <Scaling className="h-8 w-8 text-primary" />,
        title: "Valuations & Due Diligence",
        description: "Our independent and objective approach ensures robust support for transactions and strategic decisions:",
        points: [
            "Business and equity valuations",
            "Financial due diligence for mergers, acquisitions, and capital raising",
            "Deal structuring and transaction support"
        ]
    },
    {
        icon: <Receipt className="h-8 w-8 text-primary" />,
        title: "Tax Advisory",
        description: "We help businesses navigate the tax landscape with efficiency and foresight:",
        points: [
            "Corporate tax planning and compliance",
            "SARS engagement and dispute resolution support",
            "Tailored tax strategies to optimize financial outcomes"
        ]
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Audit Readiness & Review",
        description: "We prepare organizations for successful audits and strengthen internal governance:",
        points: [
            "External audit preparation and coordination",
            "Internal control assessments and remediation",
            "Pre-issuance quality reviews and technical file evaluations"
        ]
    },
    {
        icon: <AreaChart className="h-8 w-8 text-primary" />,
        title: "Financial Modelling & Forecasting",
        description: "Our models turn data into decision-making tools that drive growth and investment confidence:",
        points: [
            "Bespoke financial models for investment appraisals",
            "Scenario planning and sensitivity analysis",
            "Capital structuring and funding strategy support"
        ]
    },
    {
        icon: <Cog className="h-8 w-8 text-primary" />,
        title: "Business Automation & IT Solutions",
        description: "We modernize finance functions through smart technology and process innovation:",
        points: [
            "Low-code automation and workflow optimization",
            "Advanced Excel solutions and dashboarding",
            "Cloud-based systems integration and digital transformation"
        ]
    }
]

export default function ServicesPage() {
    return (
        <div className="bg-background animate-fade-in-up">
            <div className="container py-16 lg:py-24">
                <div className="max-w-3xl mx-auto text-center">
                     <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Our Services
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                       A dynamic range of professional services designed to deliver clarity, compliance, and strategic advantage. Our multidisciplinary expertise enables us to support clients through complex financial decisions and operational challenges with precision and confidence.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="flex flex-col bg-card hover:shadow-lg transition-shadow">
                            <CardHeader>
                                 <div className="mb-4">
                                    {service.icon}
                                </div>
                                <CardTitle className="font-headline text-xl text-foreground">{service.title}</CardTitle>
                                <CardDescription className="pt-2 text-muted-foreground">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-primary mr-2 mt-1">&#10003;</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}