import { Award, Users, Layers, Unlock, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";

const values = [
    {
        icon: <Award className="h-6 w-6 text-brand-primary" />,
        title: "Excellence",
        description: "We uphold the highest professional and ethical standards, delivering work that reflects integrity and precision.",
        color: "bg-blue-50",
        iconBg: "bg-blue-100"
    },
    {
        icon: <Users className="h-6 w-6 text-brand-primary" />,
        title: "Community",
        description: "We value relationships and create spaces where clients feel understood and supported.",
        color: "bg-green-50",
        iconBg: "bg-green-100"
    },
    {
        icon: <Layers className="h-6 w-6 text-brand-primary" />,
        title: "Simplicity",
        description: "We turn complex financial concepts into clear, actionable steps that anyone can follow.",
        color: "bg-purple-50",
        iconBg: "bg-purple-100"
    },
    {
        icon: <Unlock className="h-6 w-6 text-brand-primary" />,
        title: "Accessibility",
        description: "We remain approachable and responsive, ensuring every client receives our full attention.",
        color: "bg-orange-50",
        iconBg: "bg-orange-100"
    },
    {
        icon: <Lightbulb className="h-6 w-6 text-brand-primary" />,
        title: "Innovation",
        description: "We embrace technology as a tool for smarter decisions and continuous improvement.",
        color: "bg-yellow-50",
        iconBg: "bg-yellow-100"
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-brand-primary" />,
        title: "Impact",
        description: "Our mission is to build stronger, more resilient businesses that create lasting value.",
        color: "bg-pink-50",
        iconBg: "bg-pink-100"
    }
];

export default function ValuesSection() {
    return (
        <section id="values" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1.5 rounded-full text-sm mb-4">
                        <Award className="w-3 h-3" />
                        <span>Our Values</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
                        The Principles That 
                        <span className="block text-brand-primary">Guide Our Growth</span>
                    </h2>
                    <p className="text-base text-brand-black/70 max-w-2xl mx-auto">
                        Our values are the foundation of everything we do, guiding our approach and ensuring meaningful relationships.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {values.map((value, index) => (
                        <div key={index} className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300">
                            <div className="space-y-4">
                                <div className={`w-12 h-12 rounded-lg ${value.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    {value.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-lg text-brand-black group-hover:text-brand-primary transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-brand-black/70 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <div className="inline-block bg-brand-purple-50 px-6 py-3 rounded-full">
                        <span className="text-brand-black text-sm font-medium">
                            These values drive us to deliver exceptional results while building lasting partnerships
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}