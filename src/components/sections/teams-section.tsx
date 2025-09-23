import { Card } from "@/components/ui/card";
import { Users, Scaling, Receipt, Cpu } from "lucide-react";
import Image from "next/image";

const teams = [
    {
        icon: <Users className="h-6 w-6 text-brand-primary" />,
        title: "Accounting & Technical Advisory Team",
        description: "Specializing in IFRS and complex accounting matters with experience in banking and corporate finance.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
        color: "bg-blue-50",
        iconBg: "bg-blue-100"
    },
    {
        icon: <Scaling className="h-6 w-6 text-brand-primary" />,
        title: "Valuations & Due Diligence Team", 
        description: "Bringing analytical precision to valuation and transaction support with investment banking backgrounds.",
        image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=400&h=300&fit=crop",
        color: "bg-green-50",
        iconBg: "bg-green-100"
    },
    {
        icon: <Receipt className="h-6 w-6 text-brand-primary" />,
        title: "Tax Advisory Team",
        description: "Navigating regulatory complexity with strategic tax guidance to optimize structures and resolve disputes.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        color: "bg-purple-50",
        iconBg: "bg-purple-100"
    },
    {
        icon: <Cpu className="h-6 w-6 text-brand-primary" />,
        title: "Business Intelligence & Automation Team",
        description: "Combining financial expertise with digital innovation to automate processes and enhance reporting.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
        color: "bg-orange-50",
        iconBg: "bg-orange-100"
    }
];

export default function TeamsSection() {
    return (
        <section id="teams" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1.5 rounded-full text-sm mb-4">
                        <Users className="w-3 h-3" />
                        <span>Our Specialist Teams</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
                        Expert Teams Driving
                        <span className="block text-brand-primary">Strategic Excellence</span>
                    </h2>
                    <p className="text-base text-brand-black/70 max-w-2xl mx-auto">
                        Specialized teams with deep industry expertise delivering tailored solutions for complex business challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {teams.map((team, index) => (
                        <Card key={index} className={`group p-8 bg-white border border-gray-200 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 ${team.color}`}>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className={`${team.iconBg} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        {team.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-xl text-brand-black mb-1 group-hover:text-brand-primary transition-colors">
                                            {team.title}
                                        </h3>
                                        <div className="w-12 h-1 bg-brand-primary rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-sm text-brand-black/70 leading-relaxed">
                                    {team.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <div className="inline-block bg-brand-primary/10 px-6 py-3 rounded-full">
                        <span className="text-brand-primary text-sm font-medium">
                            Ready to work with our expert teams? Let's start your journey to financial excellence.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}