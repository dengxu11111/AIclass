import Link from "next/link";
import { FadeIn } from "@/components/ui/AnimationWrappers";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-primary py-24 lg:py-32 flex items-center min-h-[85vh]">
            {/* Background Gradient & Particles Simulation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-light via-primary to-primary-dark"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-30"></div>
                {/* Simple CSS Grid overlay to simulate network focus */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center text-white">
                <FadeIn delay={0.1} duration={0.6}>
                    <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent mb-6 border border-accent/30">
                        让科研不再艰难
                    </span>
                </FadeIn>

                <FadeIn delay={0.2} duration={0.6}>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                        最新 AI 驱动科研 <br className="hidden lg:block" /> 全链路实战营
                    </h1>
                </FadeIn>

                <FadeIn delay={0.3} duration={0.6}>
                    <p className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-light">
                        贯穿大模型应用、数据分析、自动化编程、文献及知识管理、科研写作与绘图、构建本地 LLM 与 Agent体系，让 AI 成为您不可或缺的科研伙伴。
                    </p>
                </FadeIn>

                <FadeIn delay={0.4} duration={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/register"
                        className="w-full sm:w-auto rounded-full bg-accent px-8 py-4 text-center text-base font-bold text-white shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:bg-accent-dark hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                        立即报名
                    </Link>
                    <Link
                        href="/courses"
                        className="w-full sm:w-auto rounded-full bg-white/10 px-8 py-4 text-center text-base font-bold text-white backdrop-blur-sm border border-white/20 transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                        查看课程大纲
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}
