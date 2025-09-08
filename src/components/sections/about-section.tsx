import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, BarChart } from "lucide-react";

const aboutItems = [
    {
        icon: <Users className="h-8 w-8 text-brand-primary" />,
        title: "Expert Team",
        description: "Founded by Chartered Accountants with over 30 years of combined experience."
    },
    {
        icon: <Briefcase className="h-8 w-8 text-brand-primary" />,
        title: "Comprehensive Services",
        description: "Specializing in tax, audit, accounting, valuations, due diligence, and more."
    },
    {
        icon: <BarChart className="h-8 w-8 text-brand-primary" />,
        title: "Driving Growth",
        description: "Delivering actionable intelligence that drives growth and resilience for our clients."
    }
]

export default function AboutSection() {
    return (
        <section id="about" className="py-16 lg:py-24 bg-brand-gradient-about relative overflow-hidden">
            {/* Decorative floating elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-10 w-24 h-24 bg-brand-accent/10 rounded-full blur-xl float-brand"></div>
                <div className="absolute bottom-1/3 right-16 w-36 h-36 bg-brand-primary/5 rounded-full blur-2xl float-brand" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="container relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-brand-xl hover-brand-lift">
                            <Image
                              data-ai-hint="business analytics abstract"
                              src="https://picsum.photos/600/800"
                              alt="About Kulisani Capital"
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient overlays for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-accent/10 to-brand-primary/20"></div>
                        </div>
                        {/* Floating accent elements around image */}
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-gradient-primary rounded-full shadow-brand-lg float-brand opacity-80"></div>
                        <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-accent rounded-full shadow-brand float-brand" style={{animationDelay: '1s'}}></div>
                    </div>
                    
                     <div className="space-y-10">
                        <div className="text-left">
                             <h2 className="font-headline text-3xl font-bold tracking-tight text-brand-black sm:text-4xl mb-4">
                                <span className="text-brand-gradient-vibrant">Precision-Driven</span> Advisory
                            </h2>
                            <div className="w-16 h-1 bg-brand-gradient-primary rounded-full mb-6"></div>
                            <p className="text-lg leading-relaxed text-gray-600">
                                Kulisani Capital is a boutique professional services firm dedicated to empowering businesses with innovative financial and strategic solutions.
                            </p>
                        </div>
                        
                        <div className="space-y-8">
                            {aboutItems.map((item, index) => (
                                <div key={index} className="group flex items-start space-x-6 hover-brand-lift p-6 rounded-xl hover:bg-brand-gradient-card transition-all duration-500 border border-transparent hover:border-brand-accent/30">
                                    <div className="flex-shrink-0 bg-brand-gradient-accent p-4 rounded-xl shadow-brand group-hover:shadow-brand-lg group-hover:scale-110 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold text-brand-black group-hover:text-brand-primary transition-colors duration-300">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                         <div className="relative">
                            <div className="absolute inset-0 bg-brand-gradient-card rounded-xl blur-sm"></div>
                            <p className="relative text-gray-700 bg-white/90 p-6 rounded-xl border-brand-gradient shadow-brand leading-relaxed">
                               We partner with organizations of all sizes to deliver tailored solutions that meet unique challenges and strategic goals. We are your trusted partner, delivering strategic clarity and operational confidence.
                            </p>
                            {/* Decorative corner accent */}
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-primary rounded-full opacity-20"></div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
