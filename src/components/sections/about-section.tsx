import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, BarChart } from "lucide-react";

const aboutItems = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Expert Team",
        description: "Founded by Chartered Accountants with over 30 years of combined experience."
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Comprehensive Services",
        description: "Specializing in tax, audit, accounting, valuations, due diligence, and more."
    },
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: "Driving Growth",
        description: "Delivering actionable intelligence that drives growth and resilience for our clients."
    }
]

export default function AboutSection() {
    return (
        <section id="about" className="py-16 lg:py-24 bg-card">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden group">
                        <Image
                          data-ai-hint="business analytics abstract"
                          src="https://picsum.photos/600/800"
                          alt="About Kulisani Capital"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                     <div className="space-y-8">
                        <div className="text-left">
                             <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Precision-Driven Advisory
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-muted-foreground">
                                Kulisani Capital is a boutique professional services firm dedicated to empowering businesses with financial and strategic solutions.
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            {aboutItems.map((item, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                         <p className="text-muted-foreground">
                           We partner with organizations of all sizes to deliver tailored solutions that meet unique challenges and strategic goals. We are your trusted partner, delivering strategic clarity and operational confidence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
