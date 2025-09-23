import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Lightbulb, Target } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1.5 rounded-full text-sm mb-4">
                        <Heart className="w-3 h-3" />
                        <span>About Kulisani Capital</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
                        Nurturing Growth Through 
                        <span className="block text-brand-primary">Strategic Excellence</span>
                    </h2>
                    <p className="text-base text-brand-black/70 max-w-2xl mx-auto">
                        Kulisani, a word from the Nguni language meaning "to nurture and grow," captures our purpose: 
                        helping businesses flourish through precision-driven financial advisory.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6 mb-16">
                    {/* Images Column */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-3">
                            <div className="relative h-40">
                                <Image
                                    src="/images/intercultural-hand-shake-outdoor.jpg"
                                    alt="Professional handshake"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="relative h-32">
                                <Image
                                    src="/images/woman-8797459_1280.jpg"
                                    alt="Professional woman"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-3 mt-4">
                            <div className="relative h-32">
                                <Image
                                    src="/images/man-colleagues-talking-selfie-picture-after-successful-briefing-meeting.jpg"
                                    alt="Team celebration"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="relative h-40">
                                <Image
                                    src="/images/nairobi-109492_1280.jpg"
                                    alt="African cityscape"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Columns */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-brand-black">
                                Boutique Professional Services with Global Standards
                            </h3>
                            <p className="text-sm text-brand-black/70 leading-relaxed">
                                Kulisani Capital is a boutique professional services firm committed to providing innovative 
                                financial and strategic solutions that feel approachable and accessible. We deliver excellence 
                                and quality with a focus on clarity, simplicity, and strong community relationships.
                            </p>
                        </div>
                        
                        {/* Highlights Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Card className="border-brand-accent/20">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Heart className="h-5 w-5 text-brand-primary" />
                                        <h4 className="font-semibold text-sm text-brand-black">Kulisani Means Growth</h4>
                                    </div>
                                    <p className="text-xs text-brand-black/60">A word from the Nguni language meaning 'to nurture and grow'.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-brand-accent/20">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Users className="h-5 w-5 text-brand-primary" />
                                        <h4 className="font-semibold text-sm text-brand-black">Expert Leadership</h4>
                                    </div>
                                    <p className="text-xs text-brand-black/60">Founded by registered Chartered Accountants with 30+ years experience.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-brand-accent/20">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Lightbulb className="h-5 w-5 text-brand-primary" />
                                        <h4 className="font-semibold text-sm text-brand-black">Boutique Excellence</h4>
                                    </div>
                                    <p className="text-xs text-brand-black/60">Innovative financial solutions that feel approachable and accessible.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-brand-accent/20">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Target className="h-5 w-5 text-brand-primary" />
                                        <h4 className="font-semibold text-sm text-brand-black">Multi-Industry Experience</h4>
                                    </div>
                                    <p className="text-xs text-brand-black/60">Deep expertise across financial services, banking, retail and more.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="bg-brand-purple-50 rounded-2xl p-6 lg:p-8 text-center">
                    <blockquote className="text-base lg:text-lg font-medium text-brand-black mb-4">
                        "We combine deep technical expertise with a collaborative approach, ensuring every client 
                        receives tailored, high-quality service that builds lasting relationships."
                    </blockquote>
                    <div className="w-16 h-1 bg-brand-primary rounded-full mx-auto"></div>
                </div>
            </div>
        </section>
    );
}
