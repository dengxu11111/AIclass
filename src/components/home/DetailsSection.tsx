import { FadeIn } from "@/components/ui/AnimationWrappers";
import { courseDetails } from "@/constants/courseDetails";
import FeatureCard from "@/components/ui/FeatureCard";

export default function DetailsSection() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">培训信息</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                </FadeIn>

                <div className="max-w-4xl mx-auto space-y-8">
                    <FadeIn delay={0.1} className="bg-white rounded-2xl shadow-lg border border-graybg-dark overflow-hidden">
                        <div className="bg-primary px-8 py-4">
                            <h3 className="text-xl font-bold text-white">时间与形式</h3>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-sm text-gray-500 font-bold mb-1 uppercase tracking-wider">开课时间</p>
                                    <p className="text-lg text-primary font-semibold">{courseDetails.dates}</p>
                                    <p className="text-sm text-gray-500 mt-2">为期 4 天的实战全链路集训</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-bold mb-1 uppercase tracking-wider">培训形式</p>
                                    <p className="text-lg text-primary font-semibold">{courseDetails.format}</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="bg-white rounded-2xl shadow-lg border border-graybg-dark overflow-hidden">
                        <div className="bg-primary px-8 py-4">
                            <h3 className="text-xl font-bold text-white">教学特色</h3>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {courseDetails.features.map((feature, i) => (
                                    <FeatureCard key={i} index={i} feature={feature} />
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} className="bg-white rounded-2xl shadow-lg border border-graybg-dark overflow-hidden">
                        <div className="bg-primary px-8 py-4">
                            <h3 className="text-xl font-bold text-white">培训证书</h3>
                        </div>
                        <div className="p-8 flex items-center md:items-start flex-col md:flex-row gap-6">
                            <div className="w-20 h-20 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center">
                                <span className="text-3xl">🏅</span>
                            </div>
                            <div>
                                <p className="text-lg text-primary leading-relaxed font-medium">
                                    {courseDetails.certificate}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
