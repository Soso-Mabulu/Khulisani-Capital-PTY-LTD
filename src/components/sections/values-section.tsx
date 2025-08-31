import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Zap, Handshake, Lightbulb, TrendingUp } from "lucide-react";

const values = [
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Excellence",
        description: "We uphold the highest professional and ethical standards, delivering work that reflects integrity, precision, and deep expertise."
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Efficiency",
        description: "We prioritize speed and simplicity — producing high-quality outcomes with minimal friction, so our clients can move forward with confidence."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Partnership",
        description: "We believe in collaboration. By working closely with our clients, we co-create solutions that address real business challenges and unlock long-term value."
    },
    {
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        title: "Innovation",
        description: "We embrace technology as a catalyst for smarter decisions. From automation to advanced analytics, we continuously evolve to stay ahead of the curve."
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Impact",
        description: "We exist to elevate African businesses through world-class financial advisory. Our mission is to build stronger, more resilient enterprises that shape the continent’s future."
    }
];

export default function ValuesSection() {
    return (
        <section id="values" className="py-16 lg:py-24">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                        Our Values
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our values are the foundation of everything we do. They guide our approach and define our impact.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {values.map((value, index) => (
                        <div key={index} className="relative p-6 rounded-lg bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-4">
                                {value.icon}
                            </div>
                            <h3 className="font-headline text-lg font-bold text-brand">{value.title}</h3>
                            <p className="mt-2 text-muted-foreground">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
