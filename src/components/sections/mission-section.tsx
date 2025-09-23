import { Card } from "@/components/ui/card";
import { Eye, Rocket, Handshake, Gem } from "lucide-react";
import Image from "next/image";

export default function MissionSection() {
    return (
        <section id="mission" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
                        What Drives Us
                    </h2>
                    <p className="text-base text-brand-black/70 max-w-xl mx-auto">
                        Our core principles guide every action we take and every solution we deliver.
                    </p>
                </div>

                {/* Mission Cards with Clean Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    <Card className="group p-6 text-center bg-white border border-gray-200 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300">
                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Rocket className="h-6 w-6 text-brand-primary" />
                        </div>
                        <h3 className="font-semibold text-sm text-brand-black mb-2 group-hover:text-brand-primary transition-colors">Our Mission</h3>
                        <p className="text-xs text-brand-black/70 leading-relaxed">
                            To empower businesses with accurate, actionable, and compliant financial insights that drive strategic clarity and growth.
                        </p>
                    </Card>

                    <Card className="group p-6 text-center bg-white border border-gray-200 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300">
                        <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Eye className="h-6 w-6 text-brand-primary" />
                        </div>
                        <h3 className="font-semibold text-sm text-brand-black mb-2 group-hover:text-brand-primary transition-colors">Our Vision</h3>
                        <p className="text-xs text-brand-black/70 leading-relaxed">
                            To be Africa's most trusted financial advisory partner — known for excellence, innovation, and impact across industries.
                        </p>
                    </Card>

                    <Card className="group p-6 text-center bg-white border border-gray-200 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300">
                        <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Gem className="h-6 w-6 text-brand-primary" />
                        </div>
                        <h3 className="font-semibold text-sm text-brand-black mb-2 group-hover:text-brand-primary transition-colors">Our Purpose</h3>
                        <p className="text-xs text-brand-black/70 leading-relaxed">
                            We exist to elevate African enterprises by delivering world-class financial solutions that unlock potential.
                        </p>
                    </Card>

                    <Card className="group p-6 text-center bg-white border border-gray-200 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300">
                        <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Handshake className="h-6 w-6 text-brand-primary" />
                        </div>
                        <h3 className="font-semibold text-sm text-brand-black mb-2 group-hover:text-brand-primary transition-colors">Our Promise</h3>
                        <p className="text-xs text-brand-black/70 leading-relaxed">
                            We combine deep technical expertise with a collaborative approach, ensuring tailored, high-quality service.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}