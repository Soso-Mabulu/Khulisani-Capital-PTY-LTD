import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 lg:py-24 bg-card">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                     <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        About Us
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Kulisani Capital (Pty) Ltd is a boutique professional services firm dedicated to empowering businesses with precision-driven financial and strategic advisory solutions. We specialize in a comprehensive suite of services, including tax advisory, audit and assurance, accounting, business valuations, due diligence, financial modeling, and business process automation.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-muted-foreground">
                            Founded by a team of seasoned Chartered Accountants with over 30 years of combined experience, Kulisani Capital was built on a commitment to excellence, integrity, and measurable impact. Our professionals bring deep technical expertise and industry insight to every engagement, ensuring that our clients receive not only compliant and accurate financial guidance, but also actionable intelligence that drives growth and resilience.
                        </p>
                        <p className="text-muted-foreground">
                            We serve a diverse client base across multiple sectors, partnering with organizations of all sizes to deliver tailored solutions that meet their unique challenges and strategic goals. Whether you're navigating complex regulatory landscapes, preparing for investment, or optimizing internal operations, we act as a trusted partner — delivering strategic clarity and operational confidence at every step.
                        </p>
                    </div>
                     <div className="relative h-96 rounded-lg overflow-hidden group">
                        <Image
                          data-ai-hint="team collaboration office"
                          src="https://picsum.photos/600/400"
                          alt="Our Team"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </div>
                <div className="mt-16 max-w-3xl mx-auto text-center">
                    <p className="text-lg leading-8 text-muted-foreground">
                        At Kulisani Capital, we believe that sound financial decisions are the cornerstone of sustainable success. Our mission is to support decision-makers with the tools, insights, and foresight they need to lead with confidence in an ever-evolving business environment.
                    </p>
                </div>
            </div>
        </section>
    );
}
