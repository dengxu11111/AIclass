import { Metadata } from 'next';
import { FadeIn } from "@/components/ui/AnimationWrappers";

export const metadata: Metadata = {
    title: '关于我们 | 爱尚研修科研训练平台',
    description: '了解尚研保定信息科技有限公司以及我们"让科研不再艰难"的核心使命。',
};

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <FadeIn className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">关于我们</h1>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
                </FadeIn>

                <div className="space-y-12">
                    <FadeIn delay={0.1}>
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h2 className="text-2xl font-bold text-primary mb-4">我们的使命</h2>
                            <p className="leading-relaxed">
                                在“爱尚研修科研训练平台”，我们的副标题“让科研不再艰难”正是我们核心理念的最佳诠释。我们坚信，科研人员、硕博研究生以及高端知识工作者，应当将最宝贵的时间和精力倾注于极具创造性的科学假设与深度的学术探究上，而不是被枯燥的排版、繁琐的代码调试或机械的数据清洗所牵绊。
                            </p>
                            <p className="leading-relaxed mt-4">
                                我们致力于通过将最新前沿的大语言模型（LLMs）技术与智能体（Agent）构建方法论深度融入到实际的科研工作流中，从而全面赋能学术界。
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="bg-graybg p-8 rounded-2xl border border-graybg-dark">
                        <h2 className="text-2xl font-bold text-primary mb-4">组织机构</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            本平台由 <strong>尚研保定信息科技有限公司</strong> 独家运营主办。我们专注于缩小尖端 AI 技术与实用学术研究方法论之间的鸿沟，为您提供落地的科研生产力工具及培训方案。
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold text-primary mb-2">面向受众</h3>
                                <ul className="text-gray-600 space-y-2 list-disc list-inside marker:text-accent">
                                    <li>科研机构研究员及科学家</li>
                                    <li>硕士、博士研究生</li>
                                    <li>高等院校教授及教师</li>
                                    <li>各行业前沿知识工作者</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold text-primary mb-2">我们的支持</h3>
                                <ul className="text-gray-600 space-y-2 list-none">
                                    <li className="flex items-center"><span className="text-accent mr-2">✦</span> 专属学习社群答疑</li>
                                    <li className="flex items-center"><span className="text-accent mr-2">✦</span> 导师面对面实战交流</li>
                                    <li className="flex items-center"><span className="text-accent mr-2">✦</span> 长期课程录播回放权限</li>
                                    <li className="flex items-center"><span className="text-accent mr-2">✦</span> 深度结合实际项目演练</li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <h2 className="text-2xl font-bold text-primary mb-6">联系方式</h2>
                        <div className="bg-primary text-white rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full"></div>
                            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">会务培训负责人</p>
                                    <p className="text-lg font-bold">贾莲</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">联系电话</p>
                                    <p className="text-lg font-bold">193-3122-6341</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">官方微信</p>
                                    <p className="text-lg font-bold">193-3122-6341</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">客服QQ</p>
                                    <p className="text-lg font-bold">1632314244</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
