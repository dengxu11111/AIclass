import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrappers";

const outcomes = [
    {
        title: "构建专属科研 Agent",
        description: "从零开始，打造高度契合您特定研究领域与个性化工作流的科研专属智能体。"
    },
    {
        title: "建立系统化研究体系",
        description: "构建一个稳定且具有自我进化能力的个人科研系统，紧跟 AI 发展前沿步伐。"
    },
    {
        title: "飞跃提升科研效率",
        description: "全面自动化处理重复繁杂的数据分析、文献综述与编程任务，为您节省数百小时的宝贵时间。"
    },
    {
        title: "让 AI 成为稳定协作者",
        description: "打破 AI 仅作为工具的局限，使其成为您在头脑风暴与难题攻坚时最可靠的科研合作伙伴。"
    }
];

export default function OutcomesSection() {
    return (
        <section className="bg-primary text-white py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light/30 rounded-l-full blur-3xl -z-0"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">学习成果</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        通过此次全链路集训营，您将收获以下核心成果。
                    </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {outcomes.map((outcome, index) => (
                        <StaggerItem key={index} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-accent/50">
                            <div className="mb-6 md:mb-0 md:mr-6 flex-shrink-0 w-16 h-16 rounded-full bg-accent text-primary flex items-center justify-center text-2xl font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-accent mb-3">{outcome.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">{outcome.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
