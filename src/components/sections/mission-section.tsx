import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Eye, Rocket, Handshake, Gem } from "lucide-react";

const drives = [
    {
        icon: <Rocket className="h-8 w-8 text-primary" />,
        title: "Our Mission",
        description: "To empower businesses with accurate, actionable, and compliant financial insights that drive strategic clarity, operational efficiency, and long-term growth.",
    },
    {
        icon: <Eye className="h-8 w-8 text-primary" />,
        title: "Our Vision",
        description: "To be Africa’s most trusted financial advisory partner — known for excellence, innovation, and impact across industries and borders.",
    },
    {
        icon: <Gem className="h-8 w-8 text-primary" />,
        title: "Our Purpose",
        description: "We exist to elevate African enterprises by delivering world-class financial solutions that unlock potential, reduce complexity, and enable confident decision-making.",
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Our Promise",
        description: "We combine deep technical expertise with a collaborative approach, ensuring every client receives tailored, high-quality service that solves real business problems.",
    }
];

export default function MissionSection() {
    return (
        <section id="mission" className="py-16 lg:py-24 bg-background">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        What Drives Us
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our core principles guide every action we take and every solution we deliver.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {drives.map((drive, index) => (
                        <Card key={index} className="text-center hover:shadow-xl transition-shadow bg-card border-border/50">
                            <CardHeader>
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                    {drive.icon}
                                </div>
                                <CardTitle className="font-headline text-xl text-foreground">{drive.title}</CardTitle>
                                <CardDescription className="pt-2 text-base text-muted-foreground">
                                    {drive.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
