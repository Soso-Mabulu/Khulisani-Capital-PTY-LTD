import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Scaling, Receipt, Cpu } from "lucide-react";

const teams = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Accounting & Technical Advisory Team",
        description: "Specializing in IFRS and complex accounting matters, this team draws on experience in banking and corporate finance to provide trusted technical advisory.",
    },
    {
        icon: <Scaling className="h-8 w-8 text-primary" />,
        title: "Valuations & Due Diligence Team",
        description: "Bringing analytical precision to valuation and transaction support, with deep backgrounds in investment banking and strategic analysis.",
    },
    {
        icon: <Receipt className="h-8 w-8 text-primary" />,
        title: "Tax Advisory Team",
        description: "Navigating regulatory complexity with confidence, offering strategic tax guidance to optimize structures and resolve disputes.",
    },
    {
        icon: <Cpu className="h-8 w-8 text-primary" />,
        title: "Business Intelligence & Automation Team",
        description: "Combining financial expertise with digital innovation to automate processes, enhance reporting, and unlock data-driven decision-making.",
    }
];

export default function TeamsSection() {
    return (
        <section id="teams" className="py-16 lg:py-24">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                        Our Specialist Teams
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our strength lies in the synergy of expert teams who bring together deep technical knowledge, industry insight, and a shared commitment to excellence.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {teams.map((team, index) => (
                        <Card key={index} className="flex items-start space-x-6 p-6">
                            <div className="flex-shrink-0 mt-1">
                                {team.icon}
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-headline text-lg font-semibold text-brand">{team.title}</h3>
                                <p className="mt-2 text-muted-foreground">{team.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
