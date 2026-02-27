import { FadeIn } from "@/components/ui/AnimationWrappers";

export default function ContactSection() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <FadeIn className="max-w-4xl mx-auto bg-primary rounded-3xl p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-2xl"></div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">准备好革新您的科研方式了吗？</h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto relative z-10">
                        如果您对我们的培训课程或报名流程有任何疑问，请随时联系我们的专属会务负责人。
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <p className="text-sm text-accent mb-2 uppercase tracking-wider font-bold">会务负责人</p>
                            <p className="text-xl font-medium">贾莲</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <p className="text-sm text-accent mb-2 uppercase tracking-wider font-bold">联系电话</p>
                            <p className="text-xl font-medium">193-3122-6341</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <p className="text-sm text-accent mb-2 uppercase tracking-wider font-bold">微信</p>
                            <p className="text-xl font-medium">193-3122-6341</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <p className="text-sm text-accent mb-2 uppercase tracking-wider font-bold">QQ</p>
                            <p className="text-xl font-medium">1632314244</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
