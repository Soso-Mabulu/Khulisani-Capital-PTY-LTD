import { Eye, Rocket, Handshake, Gem } from "lucide-react";
import Image from "next/image";

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

export default function AboutPage() {
    return (
        <div className="bg-background animate-fade-in-up">
            <div className="container py-16 lg:py-24">
                <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-left">
                             <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                                About Kulisani Capital
                            </h1>
                            <p className="mt-4 text-lg leading-8 text-muted-foreground">
                                Kulisani Capital (Pty) Ltd is a boutique professional services firm dedicated to empowering businesses with precision-driven financial and strategic advisory solutions.
                            </p>
                             <p className="mt-4 text-muted-foreground">
                                Founded by a team of seasoned Chartered Accountants with over 30 years of combined experience, Kulisani Capital was built on a commitment to excellence, integrity, and measurable impact. Our professionals bring deep technical expertise and industry insight to every engagement, ensuring that our clients receive not only compliant and accurate financial guidance, but also actionable intelligence that drives growth and resilience.
                            </p>
                             <p className="mt-4 text-muted-foreground">
                                We serve a diverse client base across multiple sectors, partnering with organizations of all sizes to deliver tailored solutions that meet their unique challenges and strategic goals. Whether you're navigating complex regulatory landscapes, preparing for investment, or optimizing internal operations, we act as a trusted partner — delivering strategic clarity and operational confidence at every step.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="relative h-64 w-64 md:h-80 md:w-80 group">
                            <Image
                              data-ai-hint="corporate teamwork success"
                              src="https://picsum.photos/600/600"
                              alt="About Kulisani Capital Team"
                              width={600}
                              height={600}
                              className="object-cover rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="mission" className="py-16 lg:py-24 bg-card">
                <div className="container">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            What Drives Us
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our core principles guide every action we take and every solution we deliver.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {drives.map((drive, index) => (
                            <div key={index} className="flex items-start space-x-6 p-6 bg-background rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                                <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full">
                                    {drive.icon}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-headline text-xl font-semibold text-foreground">{drive.title}</h3>
                                    <p className="mt-2 text-muted-foreground">{drive.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
