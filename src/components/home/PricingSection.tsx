import Link from "next/link";
import { FadeIn } from "@/components/ui/AnimationWrappers";

export default function PricingSection() {
    return (
        <section className="bg-graybg py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/5 rounded-full blur-3xl -z-0"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">培训投资</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </FadeIn>

                <FadeIn delay={0.2} className="max-w-md mx-auto">
                    <div className="bg-primary rounded-3xl p-8 shadow-2xl relative overflow-hidden text-center transform transition-transform hover:scale-105 border border-primary-light">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full -z-0"></div>

                        <h3 className="text-2xl font-bold text-white mb-2 relative z-10">全链路实战营</h3>
                        <p className="text-accent mb-8 relative z-10">4天高能集训</p>

                        <div className="flex items-center justify-center text-white mb-8 relative z-10">
                            <span className="text-3xl font-bold mr-1">¥</span>
                            <span className="text-6xl font-black tracking-tighter">3980</span>
                            <span className="text-gray-400 ml-2">/ 人</span>
                        </div>

                        <ul className="text-left text-gray-300 space-y-4 mb-10 relative z-10 shrink-0">
                            <li className="flex items-start">
                                <span className="text-accent mr-3 mt-1">✓</span>
                                <span>访问全部 11 个章节及随堂课件</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-3 mt-1">✓</span>
                                <span><strong>重磅福利：</strong> 赠送 1 个月 ChatGPT 高级会员账号 (免翻墙支持 Claude, Gemini, Grok 等多模型)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-3 mt-1">✓</span>
                                <span>支持在线查验的专业技能培训证书</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-3 mt-1">✓</span>
                                <span>包含长期课程回放权限与专属学习社群答疑</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-3 mt-1">✓</span>
                                <span className="text-sm">可开具正规发票：培训费、会议费、资料费、技术咨询费等。</span>
                            </li>
                        </ul>

                        <Link
                            href="/register"
                            className="block w-full py-4 px-6 rounded-full bg-accent text-white font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all hover:bg-white hover:text-primary hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] relative z-10"
                        >
                            立即报名
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
